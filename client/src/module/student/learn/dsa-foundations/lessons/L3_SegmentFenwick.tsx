
i
m
p
o
r
t
 
{
 
u
s
e
M
e
m
o
,
 
u
s
e
S
t
a
t
e
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
B
o
o
k
O
p
e
n
,
 
C
o
d
e
2
,
 
L
i
g
h
t
b
u
l
b
,
 
P
l
a
y
,
 
T
a
r
g
e
t
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{


 
 
L
e
s
s
o
n
S
h
e
l
l
,


 
 
t
y
p
e
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
,


 
 
t
y
p
e
 
L
e
s
s
o
n
T
a
b
D
e
f
,


}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
d
s
a
-
t
h
e
o
r
y
/
L
e
s
s
o
n
S
h
e
l
l
"
;


i
m
p
o
r
t
 
{


 
 
A
l
g
o
C
a
n
v
a
s
,


 
 
I
n
p
u
t
E
d
i
t
o
r
,


 
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
,


 
 
u
s
e
S
t
e
p
P
l
a
y
e
r
,


 
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
,


}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
d
s
a
-
t
h
e
o
r
y
/
a
l
g
o
"
;


i
m
p
o
r
t
 
{


 
 
C
a
l
l
o
u
t
,


 
 
I
n
l
i
n
e
C
o
d
e
,


 
 
L
e
d
e
,


 
 
P
i
l
l
B
u
t
t
o
n
,


 
 
S
e
c
t
i
o
n
E
y
e
b
r
o
w
,


 
 
S
e
c
t
i
o
n
T
i
t
l
e
,


 
 
S
u
b
H
e
a
d
i
n
g
,


 
 
T
H
E
M
E
,


}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
d
s
a
-
t
h
e
o
r
y
/
p
r
i
m
i
t
i
v
e
s
"
;


i
m
p
o
r
t
 
{
 
P
r
a
c
t
i
c
e
T
a
b
 
}
 
f
r
o
m
 
"
.
.
/
P
r
a
c
t
i
c
e
T
a
b
"
;




c
o
n
s
t
 
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
=
 
"
s
e
g
m
e
n
t
-
t
r
e
e
"
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
o
c
a
l
 
C
e
l
l
S
t
a
t
e
 
+
 
c
o
l
o
r
 
m
a
p
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




t
y
p
e
 
C
e
l
l
S
t
a
t
e
 
=
 
"
d
e
f
a
u
l
t
"
 
|
 
"
a
c
t
i
v
e
"
 
|
 
"
v
i
s
i
t
e
d
"
 
|
 
"
d
o
n
e
"
 
|
 
"
m
i
s
m
a
t
c
h
"
 
|
 
"
m
a
t
c
h
"
 
|
 
"
s
w
a
p
"
 
|
 
"
w
i
n
d
o
w
"
 
|
 
"
p
a
t
h
"
;




c
o
n
s
t
 
S
T
A
T
E
_
C
O
L
O
R
:
 
R
e
c
o
r
d
<
C
e
l
l
S
t
a
t
e
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
d
e
f
a
u
l
t
:
 
T
H
E
M
E
.
b
g
,


 
 
a
c
t
i
v
e
:
 
"
#
a
3
e
6
3
5
"
,


 
 
v
i
s
i
t
e
d
:
 
"
#
d
1
f
a
e
5
"
,


 
 
d
o
n
e
:
 
"
#
8
6
e
f
a
c
"
,


 
 
m
i
s
m
a
t
c
h
:
 
"
#
f
c
a
5
a
5
"
,


 
 
m
a
t
c
h
:
 
"
#
6
e
e
7
b
7
"
,


 
 
s
w
a
p
:
 
"
#
f
8
7
1
7
1
"
,


 
 
w
i
n
d
o
w
:
 
"
#
b
f
d
b
f
e
"
,


 
 
p
a
t
h
:
 
"
#
e
9
d
5
f
f
"
,


}
;




c
o
n
s
t
 
S
T
A
T
E
_
B
O
R
D
E
R
:
 
R
e
c
o
r
d
<
C
e
l
l
S
t
a
t
e
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
d
e
f
a
u
l
t
:
 
T
H
E
M
E
.
b
o
r
d
e
r
,


 
 
a
c
t
i
v
e
:
 
"
#
6
5
a
3
0
d
"
,


 
 
v
i
s
i
t
e
d
:
 
"
#
3
4
d
3
9
9
"
,


 
 
d
o
n
e
:
 
"
#
2
2
c
5
5
e
"
,


 
 
m
i
s
m
a
t
c
h
:
 
"
#
f
8
7
1
7
1
"
,


 
 
m
a
t
c
h
:
 
"
#
1
0
b
9
8
1
"
,


 
 
s
w
a
p
:
 
"
#
e
f
4
4
4
4
"
,


 
 
w
i
n
d
o
w
:
 
"
#
3
b
8
2
f
6
"
,


 
 
p
a
t
h
:
 
"
#
8
b
5
c
f
6
"
,


}
;




c
o
n
s
t
 
S
T
A
T
E
_
T
E
X
T
:
 
R
e
c
o
r
d
<
C
e
l
l
S
t
a
t
e
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
d
e
f
a
u
l
t
:
 
T
H
E
M
E
.
t
e
x
t
,


 
 
a
c
t
i
v
e
:
 
"
#
1
a
2
e
0
5
"
,


 
 
v
i
s
i
t
e
d
:
 
"
#
1
4
5
3
2
d
"
,


 
 
d
o
n
e
:
 
"
#
1
4
5
3
2
d
"
,


 
 
m
i
s
m
a
t
c
h
:
 
"
#
4
5
0
a
0
a
"
,


 
 
m
a
t
c
h
:
 
"
#
1
4
5
3
2
d
"
,


 
 
s
w
a
p
:
 
"
#
4
5
0
a
0
a
"
,


 
 
w
i
n
d
o
w
:
 
"
#
1
e
3
a
8
a
"
,


 
 
p
a
t
h
:
 
"
#
4
c
1
d
9
5
"
,


}
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
S
e
g
m
e
n
t
 
t
r
e
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




t
y
p
e
 
A
g
g
 
=
 
"
s
u
m
"
 
|
 
"
m
i
n
"
 
|
 
"
m
a
x
"
;




f
u
n
c
t
i
o
n
 
c
o
m
b
i
n
e
(
o
p
:
 
A
g
g
,
 
a
:
 
n
u
m
b
e
r
,
 
b
:
 
n
u
m
b
e
r
)
:
 
n
u
m
b
e
r
 
{


 
 
i
f
 
(
o
p
 
=
=
=
 
"
s
u
m
"
)
 
r
e
t
u
r
n
 
a
 
+
 
b
;


 
 
i
f
 
(
o
p
 
=
=
=
 
"
m
i
n
"
)
 
r
e
t
u
r
n
 
M
a
t
h
.
m
i
n
(
a
,
 
b
)
;


 
 
r
e
t
u
r
n
 
M
a
t
h
.
m
a
x
(
a
,
 
b
)
;


}


f
u
n
c
t
i
o
n
 
i
d
e
n
t
i
t
y
(
o
p
:
 
A
g
g
)
:
 
n
u
m
b
e
r
 
{


 
 
i
f
 
(
o
p
 
=
=
=
 
"
s
u
m
"
)
 
r
e
t
u
r
n
 
0
;


 
 
i
f
 
(
o
p
 
=
=
=
 
"
m
i
n
"
)
 
r
e
t
u
r
n
 
I
n
f
i
n
i
t
y
;


 
 
r
e
t
u
r
n
 
-
I
n
f
i
n
i
t
y
;


}




i
n
t
e
r
f
a
c
e
 
S
e
g
N
o
d
e
 
{


 
 
i
d
:
 
s
t
r
i
n
g
;


 
 
i
d
x
:
 
n
u
m
b
e
r
;


 
 
l
o
:
 
n
u
m
b
e
r
;


 
 
h
i
:
 
n
u
m
b
e
r
;


 
 
v
a
l
u
e
:
 
n
u
m
b
e
r
;


 
 
l
e
f
t
?
:
 
s
t
r
i
n
g
;


 
 
r
i
g
h
t
?
:
 
s
t
r
i
n
g
;


}


t
y
p
e
 
S
e
g
T
r
e
e
 
=
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
S
e
g
N
o
d
e
>
;




i
n
t
e
r
f
a
c
e
 
S
e
g
F
r
a
m
e
 
{


 
 
l
i
n
e
:
 
n
u
m
b
e
r
;


 
 
t
r
e
e
:
 
S
e
g
T
r
e
e
;


 
 
r
o
o
t
I
d
:
 
s
t
r
i
n
g
;


 
 
n
o
d
e
S
t
a
t
e
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
C
e
l
l
S
t
a
t
e
>
;


 
 
a
r
r
S
t
a
t
e
s
:
 
C
e
l
l
S
t
a
t
e
[
]
;


 
 
m
e
s
s
a
g
e
:
 
s
t
r
i
n
g
;


 
 
v
a
r
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
 
|
 
n
u
m
b
e
r
 
|
 
u
n
d
e
f
i
n
e
d
>
;


}




f
u
n
c
t
i
o
n
 
c
l
o
n
e
S
e
g
(
t
:
 
S
e
g
T
r
e
e
)
:
 
S
e
g
T
r
e
e
 
{


 
 
c
o
n
s
t
 
o
:
 
S
e
g
T
r
e
e
 
=
 
{
}
;


 
 
O
b
j
e
c
t
.
v
a
l
u
e
s
(
t
)
.
f
o
r
E
a
c
h
(
(
n
)
 
=
>
 
{
 
o
[
n
.
i
d
]
 
=
 
{
 
.
.
.
n
 
}
;
 
}
)
;


 
 
r
e
t
u
r
n
 
o
;


}




f
u
n
c
t
i
o
n
 
b
u
i
l
d
S
e
g
(


 
 
a
r
r
:
 
n
u
m
b
e
r
[
]
,


 
 
o
p
:
 
A
g
g
,


 
 
f
r
a
m
e
s
:
 
S
e
g
F
r
a
m
e
[
]
 
|
 
n
u
l
l
,


)
:
 
{
 
t
r
e
e
:
 
S
e
g
T
r
e
e
;
 
r
o
o
t
I
d
:
 
s
t
r
i
n
g
 
}
 
{


 
 
c
o
n
s
t
 
t
r
e
e
:
 
S
e
g
T
r
e
e
 
=
 
{
}
;


 
 
f
u
n
c
t
i
o
n
 
r
e
c
(
i
d
x
:
 
n
u
m
b
e
r
,
 
l
o
:
 
n
u
m
b
e
r
,
 
h
i
:
 
n
u
m
b
e
r
)
:
 
s
t
r
i
n
g
 
{


 
 
 
 
c
o
n
s
t
 
i
d
 
=
 
`
s
$
{
i
d
x
}
`
;


 
 
 
 
i
f
 
(
l
o
 
=
=
=
 
h
i
)
 
{


 
 
 
 
 
 
t
r
e
e
[
i
d
]
 
=
 
{
 
i
d
,
 
i
d
x
,
 
l
o
,
 
h
i
,
 
v
a
l
u
e
:
 
a
r
r
[
l
o
]
 
}
;


 
 
 
 
 
 
i
f
 
(
f
r
a
m
e
s
)


 
 
 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
 
 
 
 
l
i
n
e
:
 
1
,
 
t
r
e
e
:
 
c
l
o
n
e
S
e
g
(
t
r
e
e
)
,
 
r
o
o
t
I
d
:
 
"
s
1
"
,


 
 
 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
i
d
]
:
 
"
d
o
n
e
"
 
}
,


 
 
 
 
 
 
 
 
 
 
a
r
r
S
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
i
 
=
=
=
 
l
o
 
?
 
"
m
a
t
c
h
"
 
:
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
L
e
a
f
 
[
$
{
l
o
}
,
$
{
h
i
}
]
 
←
 
$
{
a
r
r
[
l
o
]
}
.
`
,
 
v
a
r
s
:
 
{
 
l
o
,
 
h
i
,
 
v
a
l
u
e
:
 
a
r
r
[
l
o
]
 
}
,


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
i
d
;


 
 
 
 
}


 
 
 
 
c
o
n
s
t
 
m
i
d
 
=
 
M
a
t
h
.
f
l
o
o
r
(
(
l
o
 
+
 
h
i
)
 
/
 
2
)
;


 
 
 
 
c
o
n
s
t
 
L
 
=
 
r
e
c
(
i
d
x
 
*
 
2
,
 
l
o
,
 
m
i
d
)
;


 
 
 
 
c
o
n
s
t
 
R
 
=
 
r
e
c
(
i
d
x
 
*
 
2
 
+
 
1
,
 
m
i
d
 
+
 
1
,
 
h
i
)
;


 
 
 
 
c
o
n
s
t
 
v
a
l
 
=
 
c
o
m
b
i
n
e
(
o
p
,
 
t
r
e
e
[
L
]
.
v
a
l
u
e
,
 
t
r
e
e
[
R
]
.
v
a
l
u
e
)
;


 
 
 
 
t
r
e
e
[
i
d
]
 
=
 
{
 
i
d
,
 
i
d
x
,
 
l
o
,
 
h
i
,
 
v
a
l
u
e
:
 
v
a
l
,
 
l
e
f
t
:
 
L
,
 
r
i
g
h
t
:
 
R
 
}
;


 
 
 
 
i
f
 
(
f
r
a
m
e
s
)


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
 
 
l
i
n
e
:
 
4
,
 
t
r
e
e
:
 
c
l
o
n
e
S
e
g
(
t
r
e
e
)
,
 
r
o
o
t
I
d
:
 
"
s
1
"
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
i
d
]
:
 
"
d
o
n
e
"
,
 
[
L
]
:
 
"
v
i
s
i
t
e
d
"
,
 
[
R
]
:
 
"
v
i
s
i
t
e
d
"
 
}
,


 
 
 
 
 
 
 
 
a
r
r
S
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
i
 
>
=
 
l
o
 
&
&
 
i
 
<
=
 
h
i
 
?
 
"
v
i
s
i
t
e
d
"
 
:
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
C
o
m
b
i
n
e
 
[
$
{
l
o
}
,
$
{
h
i
}
]
 
=
 
$
{
o
p
}
(
$
{
t
r
e
e
[
L
]
.
v
a
l
u
e
}
,
 
$
{
t
r
e
e
[
R
]
.
v
a
l
u
e
}
)
 
=
 
$
{
v
a
l
}
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
l
o
,
 
h
i
,
 
v
a
l
u
e
:
 
v
a
l
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
i
d
;


 
 
}


 
 
c
o
n
s
t
 
r
o
o
t
 
=
 
r
e
c
(
1
,
 
0
,
 
a
r
r
.
l
e
n
g
t
h
 
-
 
1
)
;


 
 
r
e
t
u
r
n
 
{
 
t
r
e
e
,
 
r
o
o
t
I
d
:
 
r
o
o
t
 
}
;


}




f
u
n
c
t
i
o
n
 
q
u
e
r
y
R
a
n
g
e
(


 
 
t
:
 
S
e
g
T
r
e
e
,


 
 
r
o
o
t
I
d
:
 
s
t
r
i
n
g
,


 
 
q
l
:
 
n
u
m
b
e
r
,


 
 
q
h
:
 
n
u
m
b
e
r
,


 
 
o
p
:
 
A
g
g
,


 
 
a
r
r
:
 
n
u
m
b
e
r
[
]
,


 
 
f
r
a
m
e
s
:
 
S
e
g
F
r
a
m
e
[
]
,


)
 
{


 
 
f
u
n
c
t
i
o
n
 
r
e
c
(
i
d
:
 
s
t
r
i
n
g
)
:
 
n
u
m
b
e
r
 
{


 
 
 
 
c
o
n
s
t
 
n
 
=
 
t
[
i
d
]
;


 
 
 
 
i
f
 
(
q
h
 
<
 
n
.
l
o
 
|
|
 
q
l
 
>
 
n
.
h
i
)
 
{


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
 
 
l
i
n
e
:
 
1
,
 
t
r
e
e
:
 
c
l
o
n
e
S
e
g
(
t
)
,
 
r
o
o
t
I
d
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
i
d
]
:
 
"
m
i
s
m
a
t
c
h
"
 
}
,


 
 
 
 
 
 
 
 
a
r
r
S
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
i
 
>
=
 
q
l
 
&
&
 
i
 
<
=
 
q
h
 
?
 
"
w
i
n
d
o
w
"
 
:
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
[
$
{
n
.
l
o
}
,
$
{
n
.
h
i
}
]
 
o
u
t
s
i
d
e
 
[
$
{
q
l
}
,
$
{
q
h
}
]
,
 
s
k
i
p
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
q
l
,
 
q
h
,
 
l
o
:
 
n
.
l
o
,
 
h
i
:
 
n
.
h
i
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
i
d
e
n
t
i
t
y
(
o
p
)
;


 
 
 
 
}


 
 
 
 
i
f
 
(
q
l
 
<
=
 
n
.
l
o
 
&
&
 
n
.
h
i
 
<
=
 
q
h
)
 
{


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
 
 
l
i
n
e
:
 
2
,
 
t
r
e
e
:
 
c
l
o
n
e
S
e
g
(
t
)
,
 
r
o
o
t
I
d
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
i
d
]
:
 
"
d
o
n
e
"
 
}
,


 
 
 
 
 
 
 
 
a
r
r
S
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
i
 
>
=
 
q
l
 
&
&
 
i
 
<
=
 
q
h
 
?
 
"
w
i
n
d
o
w
"
 
:
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
[
$
{
n
.
l
o
}
,
$
{
n
.
h
i
}
]
 
f
u
l
l
y
 
i
n
s
i
d
e
 
[
$
{
q
l
}
,
$
{
q
h
}
]
,
 
u
s
e
 
v
a
l
u
e
 
$
{
n
.
v
a
l
u
e
}
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
q
l
,
 
q
h
,
 
h
i
t
:
 
n
.
v
a
l
u
e
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
n
.
v
a
l
u
e
;


 
 
 
 
}


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
l
i
n
e
:
 
3
,
 
t
r
e
e
:
 
c
l
o
n
e
S
e
g
(
t
)
,
 
r
o
o
t
I
d
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
i
d
]
:
 
"
a
c
t
i
v
e
"
 
}
,


 
 
 
 
 
 
a
r
r
S
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
i
 
>
=
 
q
l
 
&
&
 
i
 
<
=
 
q
h
 
?
 
"
w
i
n
d
o
w
"
 
:
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
[
$
{
n
.
l
o
}
,
$
{
n
.
h
i
}
]
 
p
a
r
t
i
a
l
l
y
 
c
o
v
e
r
s
,
 
d
e
s
c
e
n
d
 
b
o
t
h
 
c
h
i
l
d
r
e
n
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
q
l
,
 
q
h
,
 
l
o
:
 
n
.
l
o
,
 
h
i
:
 
n
.
h
i
 
}
,


 
 
 
 
}
)
;


 
 
 
 
c
o
n
s
t
 
L
v
 
=
 
n
.
l
e
f
t
 
?
 
r
e
c
(
n
.
l
e
f
t
)
 
:
 
i
d
e
n
t
i
t
y
(
o
p
)
;


 
 
 
 
c
o
n
s
t
 
R
v
 
=
 
n
.
r
i
g
h
t
 
?
 
r
e
c
(
n
.
r
i
g
h
t
)
 
:
 
i
d
e
n
t
i
t
y
(
o
p
)
;


 
 
 
 
r
e
t
u
r
n
 
c
o
m
b
i
n
e
(
o
p
,
 
L
v
,
 
R
v
)
;


 
 
}


 
 
c
o
n
s
t
 
r
e
s
 
=
 
r
e
c
(
r
o
o
t
I
d
)
;


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
5
,
 
t
r
e
e
:
 
c
l
o
n
e
S
e
g
(
t
)
,
 
r
o
o
t
I
d
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
}
,
 
a
r
r
S
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
i
 
>
=
 
q
l
 
&
&
 
i
 
<
=
 
q
h
 
?
 
"
w
i
n
d
o
w
"
 
:
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
A
n
s
w
e
r
 
f
o
r
 
[
$
{
q
l
}
,
$
{
q
h
}
]
 
=
 
$
{
r
e
s
}
.
`
,


 
 
 
 
v
a
r
s
:
 
{
 
r
e
s
u
l
t
:
 
r
e
s
 
}
,


 
 
}
)
;


}




f
u
n
c
t
i
o
n
 
p
o
i
n
t
U
p
d
a
t
e
(


 
 
t
:
 
S
e
g
T
r
e
e
,


 
 
r
o
o
t
I
d
:
 
s
t
r
i
n
g
,


 
 
i
d
x
:
 
n
u
m
b
e
r
,


 
 
v
a
l
:
 
n
u
m
b
e
r
,


 
 
o
p
:
 
A
g
g
,


 
 
a
r
r
:
 
n
u
m
b
e
r
[
]
,


 
 
f
r
a
m
e
s
:
 
S
e
g
F
r
a
m
e
[
]
,


)
 
{


 
 
a
r
r
[
i
d
x
]
 
=
 
v
a
l
;


 
 
f
u
n
c
t
i
o
n
 
r
e
c
(
i
d
:
 
s
t
r
i
n
g
)
:
 
v
o
i
d
 
{


 
 
 
 
c
o
n
s
t
 
n
 
=
 
t
[
i
d
]
;


 
 
 
 
i
f
 
(
i
d
x
 
<
 
n
.
l
o
 
|
|
 
i
d
x
 
>
 
n
.
h
i
)
 
r
e
t
u
r
n
;


 
 
 
 
i
f
 
(
n
.
l
o
 
=
=
=
 
n
.
h
i
)
 
{


 
 
 
 
 
 
n
.
v
a
l
u
e
 
=
 
v
a
l
;


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
 
 
l
i
n
e
:
 
2
,
 
t
r
e
e
:
 
c
l
o
n
e
S
e
g
(
t
)
,
 
r
o
o
t
I
d
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
i
d
]
:
 
"
s
w
a
p
"
 
}
,


 
 
 
 
 
 
 
 
a
r
r
S
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
i
 
=
=
=
 
i
d
x
 
?
 
"
s
w
a
p
"
 
:
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
U
p
d
a
t
e
 
l
e
a
f
 
[
$
{
n
.
l
o
}
]
 
←
 
$
{
v
a
l
}
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
i
d
x
,
 
v
a
l
u
e
:
 
v
a
l
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}


 
 
 
 
i
f
 
(
n
.
l
e
f
t
)
 
r
e
c
(
n
.
l
e
f
t
)
;


 
 
 
 
i
f
 
(
n
.
r
i
g
h
t
)
 
r
e
c
(
n
.
r
i
g
h
t
)
;


 
 
 
 
c
o
n
s
t
 
L
v
 
=
 
n
.
l
e
f
t
 
?
 
t
[
n
.
l
e
f
t
]
.
v
a
l
u
e
 
:
 
i
d
e
n
t
i
t
y
(
o
p
)
;


 
 
 
 
c
o
n
s
t
 
R
v
 
=
 
n
.
r
i
g
h
t
 
?
 
t
[
n
.
r
i
g
h
t
]
.
v
a
l
u
e
 
:
 
i
d
e
n
t
i
t
y
(
o
p
)
;


 
 
 
 
c
o
n
s
t
 
n
e
w
V
 
=
 
c
o
m
b
i
n
e
(
o
p
,
 
L
v
,
 
R
v
)
;


 
 
 
 
n
.
v
a
l
u
e
 
=
 
n
e
w
V
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
l
i
n
e
:
 
4
,
 
t
r
e
e
:
 
c
l
o
n
e
S
e
g
(
t
)
,
 
r
o
o
t
I
d
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
i
d
]
:
 
"
a
c
t
i
v
e
"
 
}
,


 
 
 
 
 
 
a
r
r
S
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
i
 
=
=
=
 
i
d
x
 
?
 
"
s
w
a
p
"
 
:
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
R
e
c
o
m
b
i
n
e
 
[
$
{
n
.
l
o
}
,
$
{
n
.
h
i
}
]
 
=
 
$
{
n
e
w
V
}
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
i
d
x
,
 
v
a
l
u
e
:
 
n
e
w
V
 
}
,


 
 
 
 
}
)
;


 
 
}


 
 
r
e
c
(
r
o
o
t
I
d
)
;


}




c
o
n
s
t
 
B
U
I
L
D
_
P
S
E
U
D
O
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
b
u
i
l
d
(
n
o
d
e
,
 
l
o
,
 
h
i
)
:
"
,


 
 
"
 
 
i
f
 
l
o
 
=
=
 
h
i
:
 
n
o
d
e
.
v
a
l
u
e
 
←
 
a
r
r
[
l
o
]
;
 
r
e
t
u
r
n
"
,


 
 
"
 
 
m
i
d
 
←
 
(
l
o
 
+
 
h
i
)
 
/
 
2
"
,


 
 
"
 
 
b
u
i
l
d
(
l
e
f
t
,
 
l
o
,
 
m
i
d
)
;
 
b
u
i
l
d
(
r
i
g
h
t
,
 
m
i
d
+
1
,
 
h
i
)
"
,


 
 
"
 
 
n
o
d
e
.
v
a
l
u
e
 
←
 
c
o
m
b
i
n
e
(
l
e
f
t
.
v
a
l
u
e
,
 
r
i
g
h
t
.
v
a
l
u
e
)
"
,


]
;


c
o
n
s
t
 
Q
U
E
R
Y
_
P
S
E
U
D
O
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
q
u
e
r
y
(
n
o
d
e
,
 
q
l
,
 
q
h
)
:
"
,


 
 
"
 
 
i
f
 
n
o
d
e
 
o
u
t
s
i
d
e
 
[
q
l
,
q
h
]
:
 
r
e
t
u
r
n
 
i
d
e
n
t
i
t
y
"
,


 
 
"
 
 
i
f
 
n
o
d
e
 
f
u
l
l
y
 
i
n
s
i
d
e
 
[
q
l
,
q
h
]
:
 
r
e
t
u
r
n
 
n
o
d
e
.
v
a
l
u
e
"
,


 
 
"
 
 
p
a
r
t
i
a
l
 
→
 
r
e
c
u
r
s
e
 
b
o
t
h
 
c
h
i
l
d
r
e
n
"
,


 
 
"
 
 
r
e
t
u
r
n
 
c
o
m
b
i
n
e
(
l
e
f
t
,
 
r
i
g
h
t
)
"
,


 
 
"
 
 
#
 
f
i
n
a
l
"
,


]
;


c
o
n
s
t
 
U
P
D
A
T
E
_
P
S
E
U
D
O
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
u
p
d
a
t
e
(
n
o
d
e
,
 
i
d
x
,
 
v
a
l
)
:
"
,


 
 
"
 
 
i
f
 
i
d
x
 
o
u
t
s
i
d
e
 
n
o
d
e
:
 
r
e
t
u
r
n
"
,


 
 
"
 
 
i
f
 
l
e
a
f
:
 
n
o
d
e
.
v
a
l
u
e
 
←
 
v
a
l
"
,


 
 
"
 
 
r
e
c
u
r
s
e
 
c
h
i
l
d
r
e
n
"
,


 
 
"
 
 
n
o
d
e
.
v
a
l
u
e
 
←
 
c
o
m
b
i
n
e
(
l
e
f
t
,
 
r
i
g
h
t
)
"
,


]
;




t
y
p
e
 
S
e
g
O
p
 
=
 
"
b
u
i
l
d
"
 
|
 
"
q
u
e
r
y
"
 
|
 
"
u
p
d
a
t
e
"
;




f
u
n
c
t
i
o
n
 
p
a
r
s
e
A
r
r
(
s
:
 
s
t
r
i
n
g
)
:
 
n
u
m
b
e
r
[
]
 
|
 
n
u
l
l
 
{


 
 
c
o
n
s
t
 
p
 
=
 
s
.
s
p
l
i
t
(
/
[
,
\
s
]
+
/
)
.
m
a
p
(
(
x
)
 
=
>
 
x
.
t
r
i
m
(
)
)
.
f
i
l
t
e
r
(
B
o
o
l
e
a
n
)
.
m
a
p
(
N
u
m
b
e
r
)
;


 
 
i
f
 
(
p
.
s
o
m
e
(
(
n
)
 
=
>
 
N
u
m
b
e
r
.
i
s
N
a
N
(
n
)
)
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
r
e
t
u
r
n
 
p
;


}




f
u
n
c
t
i
o
n
 
b
u
i
l
d
S
e
g
F
r
a
m
e
s
(


 
 
a
r
r
:
 
n
u
m
b
e
r
[
]
,


 
 
s
e
g
O
p
:
 
S
e
g
O
p
,


 
 
o
p
:
 
A
g
g
,


 
 
q
l
:
 
n
u
m
b
e
r
,


 
 
q
h
:
 
n
u
m
b
e
r
,


 
 
u
p
I
d
x
:
 
n
u
m
b
e
r
,


 
 
u
p
V
a
l
:
 
n
u
m
b
e
r
,


)
:
 
S
e
g
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
f
r
a
m
e
s
:
 
S
e
g
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
i
f
 
(
a
r
r
.
l
e
n
g
t
h
 
=
=
=
 
0
)
 
{


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
t
r
e
e
:
 
{
}
,
 
r
o
o
t
I
d
:
 
"
"
,
 
n
o
d
e
S
t
a
t
e
s
:
 
{
}
,
 
a
r
r
S
t
a
t
e
s
:
 
[
]
,
 
m
e
s
s
a
g
e
:
 
"
E
m
p
t
y
 
a
r
r
a
y
.
"
,
 
v
a
r
s
:
 
{
}
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
;


 
 
}


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
0
,
 
t
r
e
e
:
 
{
}
,
 
r
o
o
t
I
d
:
 
"
s
1
"
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
}
,
 
a
r
r
S
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
A
r
r
a
y
 
l
e
n
g
t
h
 
$
{
a
r
r
.
l
e
n
g
t
h
}
 
w
i
t
h
 
o
p
=
$
{
o
p
}
.
`
,


 
 
 
 
v
a
r
s
:
 
{
 
n
:
 
a
r
r
.
l
e
n
g
t
h
,
 
o
p
 
}
,


 
 
}
)
;


 
 
c
o
n
s
t
 
b
u
i
l
t
 
=
 
b
u
i
l
d
S
e
g
(
a
r
r
,
 
o
p
,
 
s
e
g
O
p
 
=
=
=
 
"
b
u
i
l
d
"
 
?
 
f
r
a
m
e
s
 
:
 
n
u
l
l
)
;


 
 
i
f
 
(
s
e
g
O
p
 
=
=
=
 
"
b
u
i
l
d
"
)
 
r
e
t
u
r
n
 
f
r
a
m
e
s
;


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
0
,
 
t
r
e
e
:
 
c
l
o
n
e
S
e
g
(
b
u
i
l
t
.
t
r
e
e
)
,
 
r
o
o
t
I
d
:
 
b
u
i
l
t
.
r
o
o
t
I
d
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
O
b
j
e
c
t
.
k
e
y
s
(
b
u
i
l
t
.
t
r
e
e
)
.
m
a
p
(
(
k
)
 
=
>
 
[
k
,
 
"
d
e
f
a
u
l
t
"
 
a
s
 
C
e
l
l
S
t
a
t
e
]
)
)
,


 
 
 
 
a
r
r
S
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
B
u
i
l
t
 
s
e
g
m
e
n
t
 
t
r
e
e
.
 
N
o
w
 
r
u
n
 
$
{
s
e
g
O
p
}
.
`
,


 
 
 
 
v
a
r
s
:
 
{
 
o
p
 
}
,


 
 
}
)
;


 
 
i
f
 
(
s
e
g
O
p
 
=
=
=
 
"
q
u
e
r
y
"
)
 
{


 
 
 
 
q
u
e
r
y
R
a
n
g
e
(
b
u
i
l
t
.
t
r
e
e
,
 
b
u
i
l
t
.
r
o
o
t
I
d
,
 
q
l
,
 
q
h
,
 
o
p
,
 
a
r
r
,
 
f
r
a
m
e
s
)
;


 
 
}
 
e
l
s
e
 
{


 
 
 
 
p
o
i
n
t
U
p
d
a
t
e
(
b
u
i
l
t
.
t
r
e
e
,
 
b
u
i
l
t
.
r
o
o
t
I
d
,
 
u
p
I
d
x
,
 
u
p
V
a
l
,
 
o
p
,
 
a
r
r
,
 
f
r
a
m
e
s
)
;


 
 
}


 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
o
c
a
l
 
S
e
g
T
r
e
e
 
S
V
G
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
S
e
g
T
r
e
e
S
V
G
(
{


 
 
f
r
a
m
e
,


 
 
w
i
d
t
h
 
=
 
6
2
0
,


 
 
h
e
i
g
h
t
 
=
 
3
0
0
,


}
:
 
{


 
 
f
r
a
m
e
:
 
S
e
g
F
r
a
m
e
;


 
 
w
i
d
t
h
?
:
 
n
u
m
b
e
r
;


 
 
h
e
i
g
h
t
?
:
 
n
u
m
b
e
r
;


}
)
 
{


 
 
c
o
n
s
t
 
n
o
d
e
s
 
=
 
O
b
j
e
c
t
.
v
a
l
u
e
s
(
f
r
a
m
e
.
t
r
e
e
)
;


 
 
i
f
 
(
n
o
d
e
s
.
l
e
n
g
t
h
 
=
=
=
 
0
)
 
r
e
t
u
r
n
 
n
u
l
l
;




 
 
/
/
 
A
s
s
i
g
n
 
p
o
s
i
t
i
o
n
s
 
b
y
 
d
e
p
t
h
 
+
 
o
r
d
e
r


 
 
c
o
n
s
t
 
d
e
p
t
h
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
n
u
m
b
e
r
>
 
=
 
{
}
;


 
 
f
u
n
c
t
i
o
n
 
d
f
s
(
i
d
:
 
s
t
r
i
n
g
,
 
d
:
 
n
u
m
b
e
r
)
 
{


 
 
 
 
d
e
p
t
h
[
i
d
]
 
=
 
d
;


 
 
 
 
c
o
n
s
t
 
n
 
=
 
f
r
a
m
e
.
t
r
e
e
[
i
d
]
;


 
 
 
 
i
f
 
(
n
.
l
e
f
t
)
 
d
f
s
(
n
.
l
e
f
t
,
 
d
 
+
 
1
)
;


 
 
 
 
i
f
 
(
n
.
r
i
g
h
t
)
 
d
f
s
(
n
.
r
i
g
h
t
,
 
d
 
+
 
1
)
;


 
 
}


 
 
d
f
s
(
f
r
a
m
e
.
r
o
o
t
I
d
,
 
0
)
;




 
 
c
o
n
s
t
 
m
a
x
D
e
p
t
h
 
=
 
M
a
t
h
.
m
a
x
(
.
.
.
O
b
j
e
c
t
.
v
a
l
u
e
s
(
d
e
p
t
h
)
)
;


 
 
c
o
n
s
t
 
l
e
v
e
l
s
:
 
s
t
r
i
n
g
[
]
[
]
 
=
 
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
m
a
x
D
e
p
t
h
 
+
 
1
 
}
,
 
(
)
 
=
>
 
[
]
)
;


 
 
f
o
r
 
(
c
o
n
s
t
 
i
d
 
i
n
 
f
r
a
m
e
.
t
r
e
e
)
 
l
e
v
e
l
s
[
d
e
p
t
h
[
i
d
]
]
.
p
u
s
h
(
i
d
)
;


 
 
/
/
 
S
o
r
t
 
l
e
a
v
e
s
 
b
y
 
r
a
n
g
e


 
 
f
o
r
 
(
c
o
n
s
t
 
l
v
 
o
f
 
l
e
v
e
l
s
)
 
{


 
 
 
 
l
v
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
f
r
a
m
e
.
t
r
e
e
[
a
]
.
l
o
 
-
 
f
r
a
m
e
.
t
r
e
e
[
b
]
.
l
o
)
;


 
 
}




 
 
c
o
n
s
t
 
p
o
s
i
t
i
o
n
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}
>
 
=
 
{
}
;


 
 
f
o
r
 
(
l
e
t
 
d
 
=
 
0
;
 
d
 
<
=
 
m
a
x
D
e
p
t
h
;
 
d
+
+
)
 
{


 
 
 
 
c
o
n
s
t
 
r
o
w
 
=
 
l
e
v
e
l
s
[
d
]
;


 
 
 
 
c
o
n
s
t
 
t
o
t
a
l
 
=
 
r
o
w
.
l
e
n
g
t
h
;


 
 
 
 
r
o
w
.
f
o
r
E
a
c
h
(
(
i
d
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
p
o
s
i
t
i
o
n
s
[
i
d
]
 
=
 
{


 
 
 
 
 
 
 
 
x
:
 
(
(
i
 
+
 
0
.
5
)
 
/
 
t
o
t
a
l
)
 
*
 
w
i
d
t
h
,


 
 
 
 
 
 
 
 
y
:
 
2
4
 
+
 
d
 
*
 
(
(
h
e
i
g
h
t
 
-
 
4
0
)
 
/
 
M
a
t
h
.
m
a
x
(
1
,
 
m
a
x
D
e
p
t
h
)
)
,


 
 
 
 
 
 
}
;


 
 
 
 
}
)
;


 
 
}




 
 
c
o
n
s
t
 
R
 
=
 
2
0
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
s
v
g


 
 
 
 
 
 
v
i
e
w
B
o
x
=
{
`
0
 
0
 
$
{
w
i
d
t
h
}
 
$
{
h
e
i
g
h
t
}
`
}


 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
w
i
d
t
h
:
 
"
1
0
0
%
"
,
 
h
e
i
g
h
t
:
 
"
a
u
t
o
"
,
 
m
a
x
H
e
i
g
h
t
:
 
h
e
i
g
h
t
 
}
}


 
 
 
 
>


 
 
 
 
 
 
{
n
o
d
e
s
.
m
a
p
(
(
n
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
 
=
 
p
o
s
i
t
i
o
n
s
[
n
.
i
d
]
;


 
 
 
 
 
 
 
 
i
f
 
(
!
a
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
<
g
 
k
e
y
=
{
`
e
$
{
n
.
i
d
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
n
.
l
e
f
t
 
&
&
 
p
o
s
i
t
i
o
n
s
[
n
.
l
e
f
t
]
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
a
.
x
}
 
y
1
=
{
a
.
y
 
+
 
R
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
p
o
s
i
t
i
o
n
s
[
n
.
l
e
f
t
]
.
x
}
 
y
2
=
{
p
o
s
i
t
i
o
n
s
[
n
.
l
e
f
t
]
.
y
 
-
 
R
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
T
H
E
M
E
.
b
o
r
d
e
r
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
n
.
r
i
g
h
t
 
&
&
 
p
o
s
i
t
i
o
n
s
[
n
.
r
i
g
h
t
]
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
a
.
x
}
 
y
1
=
{
a
.
y
 
+
 
R
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
p
o
s
i
t
i
o
n
s
[
n
.
r
i
g
h
t
]
.
x
}
 
y
2
=
{
p
o
s
i
t
i
o
n
s
[
n
.
r
i
g
h
t
]
.
y
 
-
 
R
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
T
H
E
M
E
.
b
o
r
d
e
r
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
{
n
o
d
e
s
.
m
a
p
(
(
n
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
 
=
 
p
o
s
i
t
i
o
n
s
[
n
.
i
d
]
;


 
 
 
 
 
 
 
 
i
f
 
(
!
a
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
 
=
 
(
f
r
a
m
e
.
n
o
d
e
S
t
a
t
e
s
[
n
.
i
d
]
 
?
?
 
"
d
e
f
a
u
l
t
"
)
 
a
s
 
C
e
l
l
S
t
a
t
e
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
i
l
l
 
=
 
S
T
A
T
E
_
C
O
L
O
R
[
s
t
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
o
r
d
e
r
 
=
 
S
T
A
T
E
_
B
O
R
D
E
R
[
s
t
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
g
 
=
 
S
T
A
T
E
_
T
E
X
T
[
s
t
]
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
<
g
 
k
e
y
=
{
n
.
i
d
}
 
s
t
y
l
e
=
{
{
 
t
r
a
n
s
i
t
i
o
n
:
 
"
a
l
l
 
0
.
3
s
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
x
=
{
a
.
x
}
 
c
y
=
{
a
.
y
}
 
r
=
{
R
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
f
i
l
l
}
 
s
t
r
o
k
e
=
{
b
o
r
d
e
r
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
t
r
a
n
s
i
t
i
o
n
:
 
"
f
i
l
l
 
0
.
3
s
,
 
s
t
r
o
k
e
 
0
.
3
s
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
a
.
x
}
 
y
=
{
a
.
y
 
+
 
3
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
o
n
t
S
i
z
e
=
{
1
0
}
 
f
o
n
t
W
e
i
g
h
t
=
{
7
0
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
f
g
}
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
m
o
n
o
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
n
.
v
a
l
u
e
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
a
.
x
}
 
y
=
{
a
.
y
 
-
 
R
 
-
 
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
o
n
t
S
i
z
e
=
{
8
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
T
H
E
M
E
.
t
e
x
t
M
u
t
e
d
}
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
h
e
a
d
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
{
n
.
l
o
}
,
{
n
.
h
i
}
]


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
<
/
s
v
g
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
A
r
r
a
y
B
a
r
s
L
o
c
a
l
(
{


 
 
v
a
l
u
e
s
,


 
 
s
t
a
t
e
s
,


 
 
w
i
n
d
o
w
R
a
n
g
e
,


}
:
 
{


 
 
v
a
l
u
e
s
:
 
n
u
m
b
e
r
[
]
;


 
 
s
t
a
t
e
s
:
 
C
e
l
l
S
t
a
t
e
[
]
;


 
 
w
i
n
d
o
w
R
a
n
g
e
?
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
;


}
)
 
{


 
 
i
f
 
(
v
a
l
u
e
s
.
l
e
n
g
t
h
 
=
=
=
 
0
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
c
o
n
s
t
 
m
a
x
V
a
l
 
=
 
M
a
t
h
.
m
a
x
(
.
.
.
v
a
l
u
e
s
.
m
a
p
(
M
a
t
h
.
a
b
s
)
,
 
1
)
;


 
 
c
o
n
s
t
 
H
 
=
 
8
0
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
e
n
d
 
g
a
p
-
1
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
{
v
a
l
u
e
s
.
m
a
p
(
(
v
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
 
=
 
s
t
a
t
e
s
[
i
]
 
?
?
 
"
d
e
f
a
u
l
t
"
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
n
W
i
n
d
o
w
 
=
 
w
i
n
d
o
w
R
a
n
g
e
 
&
&
 
i
 
>
=
 
w
i
n
d
o
w
R
a
n
g
e
[
0
]
 
&
&
 
i
 
<
=
 
w
i
n
d
o
w
R
a
n
g
e
[
1
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
e
f
f
e
c
t
i
v
e
S
t
 
=
 
i
n
W
i
n
d
o
w
 
?
 
"
w
i
n
d
o
w
"
 
:
 
s
t
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
h
 
=
 
M
a
t
h
.
m
a
x
(
1
6
,
 
M
a
t
h
.
r
o
u
n
d
(
(
M
a
t
h
.
a
b
s
(
v
)
 
/
 
m
a
x
V
a
l
)
 
*
 
H
)
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
k
e
y
=
{
i
}
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
0
.
5
"
 
s
t
y
l
e
=
{
{
 
m
i
n
W
i
d
t
h
:
 
2
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
b
o
l
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
:
 
h
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
S
T
A
T
E
_
C
O
L
O
R
[
e
f
f
e
c
t
i
v
e
S
t
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
S
T
A
T
E
_
T
E
X
T
[
e
f
f
e
c
t
i
v
e
S
t
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
3
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
:
 
"
a
l
l
 
0
.
3
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
S
T
A
T
E
_
B
O
R
D
E
R
[
e
f
f
e
c
t
i
v
e
S
t
]
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
9
p
x
]
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>
{
i
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
F
e
n
w
i
c
k
 
t
r
e
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
b
u
i
l
d
B
I
T
(
a
r
r
:
 
n
u
m
b
e
r
[
]
)
:
 
n
u
m
b
e
r
[
]
 
{


 
 
c
o
n
s
t
 
b
i
t
 
=
 
n
e
w
 
A
r
r
a
y
(
a
r
r
.
l
e
n
g
t
h
 
+
 
1
)
.
f
i
l
l
(
0
)
;


 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
a
r
r
.
l
e
n
g
t
h
;
 
i
+
+
)
 
{


 
 
 
 
l
e
t
 
j
 
=
 
i
 
+
 
1
;


 
 
 
 
w
h
i
l
e
 
(
j
 
<
 
b
i
t
.
l
e
n
g
t
h
)
 
{
 
b
i
t
[
j
]
 
+
=
 
a
r
r
[
i
]
;
 
j
 
+
=
 
j
 
&
 
-
j
;
 
}


 
 
}


 
 
r
e
t
u
r
n
 
b
i
t
;


}




i
n
t
e
r
f
a
c
e
 
F
F
r
a
m
e
 
{


 
 
l
i
n
e
:
 
n
u
m
b
e
r
;


 
 
a
r
r
S
t
a
t
e
s
:
 
C
e
l
l
S
t
a
t
e
[
]
;


 
 
b
i
t
S
t
a
t
e
s
:
 
C
e
l
l
S
t
a
t
e
[
]
;


 
 
m
e
s
s
a
g
e
:
 
s
t
r
i
n
g
;


 
 
v
a
r
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
 
|
 
n
u
m
b
e
r
 
|
 
u
n
d
e
f
i
n
e
d
>
;


 
 
a
r
c
:
 
{
 
l
o
:
 
n
u
m
b
e
r
;
 
h
i
:
 
n
u
m
b
e
r
;
 
h
i
g
h
l
i
g
h
t
?
:
 
b
o
o
l
e
a
n
 
}
[
]
;


}




c
o
n
s
t
 
F
E
N
_
U
P
D
A
T
E
_
P
S
E
U
D
O
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
u
p
d
a
t
e
(
b
i
t
,
 
i
,
 
d
e
l
t
a
)
:
"
,


 
 
"
 
 
i
 
←
 
i
 
+
 
1
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
#
 
1
-
i
n
d
e
x
e
d
"
,


 
 
"
 
 
w
h
i
l
e
 
i
 
≤
 
n
:
"
,


 
 
"
 
 
 
 
b
i
t
[
i
]
 
+
=
 
d
e
l
t
a
"
,


 
 
"
 
 
 
 
i
 
+
=
 
i
 
&
 
(
−
i
)
 
 
 
 
 
 
 
 
 
 
#
 
j
u
m
p
 
b
y
 
l
o
w
e
s
t
 
s
e
t
 
b
i
t
"
,


]
;


c
o
n
s
t
 
F
E
N
_
Q
U
E
R
Y
_
P
S
E
U
D
O
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
p
r
e
f
i
x
(
b
i
t
,
 
i
)
:
"
,


 
 
"
 
 
i
 
←
 
i
 
+
 
1
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
#
 
1
-
i
n
d
e
x
e
d
"
,


 
 
"
 
 
s
u
m
 
←
 
0
"
,


 
 
"
 
 
w
h
i
l
e
 
i
 
>
 
0
:
"
,


 
 
"
 
 
 
 
s
u
m
 
+
=
 
b
i
t
[
i
]
"
,


 
 
"
 
 
 
 
i
 
−
=
 
i
 
&
 
(
−
i
)
"
,


 
 
"
 
 
r
e
t
u
r
n
 
s
u
m
"
,


]
;




f
u
n
c
t
i
o
n
 
b
i
t
A
r
c
s
(
n
:
 
n
u
m
b
e
r
)
:
 
{
 
l
o
:
 
n
u
m
b
e
r
;
 
h
i
:
 
n
u
m
b
e
r
 
}
[
]
 
{


 
 
c
o
n
s
t
 
a
r
c
s
:
 
{
 
l
o
:
 
n
u
m
b
e
r
;
 
h
i
:
 
n
u
m
b
e
r
 
}
[
]
 
=
 
[
]
;


 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
1
;
 
i
 
<
=
 
n
;
 
i
+
+
)
 
{


 
 
 
 
c
o
n
s
t
 
l
o
w
 
=
 
i
 
&
 
-
i
;


 
 
 
 
c
o
n
s
t
 
l
o
 
=
 
i
 
-
 
l
o
w
 
+
 
1
;


 
 
 
 
a
r
c
s
.
p
u
s
h
(
{
 
l
o
:
 
l
o
 
-
 
1
,
 
h
i
:
 
i
 
-
 
1
 
}
)
;


 
 
}


 
 
r
e
t
u
r
n
 
a
r
c
s
;


}




f
u
n
c
t
i
o
n
 
b
u
i
l
d
F
e
n
F
r
a
m
e
s
(


 
 
a
r
r
:
 
n
u
m
b
e
r
[
]
,


 
 
m
o
d
e
:
 
"
p
r
e
f
i
x
"
 
|
 
"
u
p
d
a
t
e
"
,


 
 
q
u
e
r
y
I
d
x
:
 
n
u
m
b
e
r
,


 
 
u
p
I
d
x
:
 
n
u
m
b
e
r
,


 
 
d
e
l
t
a
:
 
n
u
m
b
e
r
,


)
:
 
F
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
n
 
=
 
a
r
r
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
:
 
F
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
b
i
t
 
=
 
b
u
i
l
d
B
I
T
(
a
r
r
)
;


 
 
c
o
n
s
t
 
a
r
c
s
 
=
 
b
i
t
A
r
c
s
(
n
)
;


 
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
p
r
e
f
i
x
"
)
 
{


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
l
i
n
e
:
 
0
,
 
a
r
r
S
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
,
 
b
i
t
S
t
a
t
e
s
:
 
b
i
t
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
P
r
e
f
i
x
 
s
u
m
 
u
p
 
t
o
 
i
n
d
e
x
 
$
{
q
u
e
r
y
I
d
x
}
.
`
,
 
v
a
r
s
:
 
{
 
i
:
 
q
u
e
r
y
I
d
x
 
+
 
1
 
}
,
 
a
r
c
:
 
a
r
c
s
,


 
 
 
 
}
)
;


 
 
 
 
l
e
t
 
j
 
=
 
q
u
e
r
y
I
d
x
 
+
 
1
;


 
 
 
 
l
e
t
 
s
u
m
 
=
 
0
;


 
 
 
 
w
h
i
l
e
 
(
j
 
>
 
0
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
b
i
t
S
t
:
 
C
e
l
l
S
t
a
t
e
[
]
 
=
 
b
i
t
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
;


 
 
 
 
 
 
c
o
n
s
t
 
a
r
c
H
i
 
=
 
a
r
c
s
.
m
a
p
(
(
a
,
 
i
)
 
=
>
 
(
{
 
.
.
.
a
,
 
h
i
g
h
l
i
g
h
t
:
 
i
 
=
=
=
 
j
 
-
 
1
 
}
)
)
;


 
 
 
 
 
 
b
i
t
S
t
[
j
]
 
=
 
"
m
a
t
c
h
"
;


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
 
 
l
i
n
e
:
 
4
,


 
 
 
 
 
 
 
 
a
r
r
S
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
i
 
<
=
 
q
u
e
r
y
I
d
x
 
?
 
"
w
i
n
d
o
w
"
 
:
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
 
 
 
 
b
i
t
S
t
a
t
e
s
:
 
b
i
t
S
t
,


 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
A
d
d
 
b
i
t
[
$
{
j
}
]
 
=
 
$
{
b
i
t
[
j
]
}
 
(
c
o
v
e
r
s
 
[
$
{
a
r
c
s
[
j
 
-
 
1
]
?
.
l
o
 
?
?
 
0
}
,
$
{
a
r
c
s
[
j
 
-
 
1
]
?
.
h
i
 
?
?
 
0
}
]
)
.
 
R
u
n
n
i
n
g
 
s
u
m
 
=
 
$
{
s
u
m
 
+
 
b
i
t
[
j
]
}
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
i
:
 
j
,
 
r
u
n
n
i
n
g
:
 
s
u
m
 
+
 
b
i
t
[
j
]
 
}
,
 
a
r
c
:
 
a
r
c
H
i
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
s
u
m
 
+
=
 
b
i
t
[
j
]
;


 
 
 
 
 
 
j
 
-
=
 
j
 
&
 
-
j
;


 
 
 
 
}


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
l
i
n
e
:
 
6
,
 
a
r
r
S
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
i
 
<
=
 
q
u
e
r
y
I
d
x
 
?
 
"
w
i
n
d
o
w
"
 
:
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
 
 
b
i
t
S
t
a
t
e
s
:
 
b
i
t
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
P
r
e
f
i
x
 
s
u
m
 
[
0
,
$
{
q
u
e
r
y
I
d
x
}
]
 
=
 
$
{
s
u
m
}
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
r
e
s
u
l
t
:
 
s
u
m
 
}
,
 
a
r
c
:
 
a
r
c
s
,


 
 
 
 
}
)
;


 
 
}
 
e
l
s
e
 
{


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
l
i
n
e
:
 
0
,
 
a
r
r
S
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
i
 
=
=
=
 
u
p
I
d
x
 
?
 
"
s
w
a
p
"
 
:
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
 
 
b
i
t
S
t
a
t
e
s
:
 
b
i
t
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
U
p
d
a
t
e
 
i
n
d
e
x
 
$
{
u
p
I
d
x
}
:
 
a
d
d
 
$
{
d
e
l
t
a
}
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
i
:
 
u
p
I
d
x
 
+
 
1
,
 
d
e
l
t
a
 
}
,
 
a
r
c
:
 
a
r
c
s
,


 
 
 
 
}
)
;


 
 
 
 
l
e
t
 
j
 
=
 
u
p
I
d
x
 
+
 
1
;


 
 
 
 
w
h
i
l
e
 
(
j
 
<
=
 
n
)
 
{


 
 
 
 
 
 
b
i
t
[
j
]
 
+
=
 
d
e
l
t
a
;


 
 
 
 
 
 
c
o
n
s
t
 
b
i
t
S
t
:
 
C
e
l
l
S
t
a
t
e
[
]
 
=
 
b
i
t
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
;


 
 
 
 
 
 
b
i
t
S
t
[
j
]
 
=
 
"
s
w
a
p
"
;


 
 
 
 
 
 
c
o
n
s
t
 
a
r
c
H
i
 
=
 
a
r
c
s
.
m
a
p
(
(
a
,
 
i
)
 
=
>
 
(
{
 
.
.
.
a
,
 
h
i
g
h
l
i
g
h
t
:
 
i
 
=
=
=
 
j
 
-
 
1
 
}
)
)
;


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
 
 
l
i
n
e
:
 
3
,


 
 
 
 
 
 
 
 
a
r
r
S
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
i
 
=
=
=
 
u
p
I
d
x
 
?
 
"
s
w
a
p
"
 
:
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
 
 
 
 
b
i
t
S
t
a
t
e
s
:
 
b
i
t
S
t
,


 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
b
i
t
[
$
{
j
}
]
 
+
=
 
$
{
d
e
l
t
a
}
 
→
 
n
o
w
 
$
{
b
i
t
[
j
]
}
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
i
:
 
j
,
 
b
i
t
:
 
b
i
t
[
j
]
 
}
,
 
a
r
c
:
 
a
r
c
H
i
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
j
 
+
=
 
j
 
&
 
-
j
;


 
 
 
 
}


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
l
i
n
e
:
 
4
,
 
a
r
r
S
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
 
 
b
i
t
S
t
a
t
e
s
:
 
b
i
t
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
U
p
d
a
t
e
 
c
o
m
p
l
e
t
e
.
`
,
 
v
a
r
s
:
 
{
 
u
p
d
a
t
e
s
:
 
"
d
o
n
e
"
 
}
,
 
a
r
c
:
 
a
r
c
s
,


 
 
 
 
}
)
;


 
 
}


 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
;


}




f
u
n
c
t
i
o
n
 
B
I
T
A
r
c
s
(
{
 
a
r
c
s
,
 
n
 
}
:
 
{
 
a
r
c
s
:
 
{
 
l
o
:
 
n
u
m
b
e
r
;
 
h
i
:
 
n
u
m
b
e
r
;
 
h
i
g
h
l
i
g
h
t
?
:
 
b
o
o
l
e
a
n
 
}
[
]
;
 
n
:
 
n
u
m
b
e
r
 
}
)
 
{


 
 
c
o
n
s
t
 
c
e
l
l
W
 
=
 
M
a
t
h
.
m
i
n
(
4
8
,
 
M
a
t
h
.
m
a
x
(
2
0
,
 
M
a
t
h
.
f
l
o
o
r
(
5
6
0
 
/
 
M
a
t
h
.
m
a
x
(
1
,
 
n
 
+
 
1
)
)
)
)
;


 
 
c
o
n
s
t
 
g
a
p
 
=
 
4
;


 
 
c
o
n
s
t
 
t
o
t
a
l
W
 
=
 
(
n
 
+
 
1
)
 
*
 
c
e
l
l
W
 
+
 
n
 
*
 
g
a
p
;


 
 
c
o
n
s
t
 
h
e
i
g
h
t
 
=
 
6
0
;


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
m
t
-
1
"
>


 
 
 
 
 
 
<
s
v
g
 
v
i
e
w
B
o
x
=
{
`
0
 
0
 
$
{
t
o
t
a
l
W
}
 
$
{
h
e
i
g
h
t
}
`
}
 
w
i
d
t
h
=
{
t
o
t
a
l
W
}
 
h
e
i
g
h
t
=
{
h
e
i
g
h
t
}
>


 
 
 
 
 
 
 
 
{
a
r
c
s
.
m
a
p
(
(
a
r
c
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
1
 
=
 
(
a
r
c
.
l
o
 
+
 
1
)
 
*
 
(
c
e
l
l
W
 
+
 
g
a
p
)
 
+
 
c
e
l
l
W
 
/
 
2
 
-
 
g
a
p
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
2
 
=
 
(
a
r
c
.
h
i
 
+
 
1
)
 
*
 
(
c
e
l
l
W
 
+
 
g
a
p
)
 
+
 
c
e
l
l
W
 
/
 
2
 
-
 
g
a
p
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
i
d
 
=
 
(
x
1
 
+
 
x
2
)
 
/
 
2
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
l
 
=
 
a
r
c
.
h
i
g
h
l
i
g
h
t
 
?
 
T
H
E
M
E
.
a
c
c
e
n
t
 
:
 
T
H
E
M
E
.
t
e
x
t
M
u
t
e
d
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
p
a
t
h


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
=
{
`
M
 
$
{
x
1
}
 
6
 
Q
 
$
{
m
i
d
}
 
$
{
3
0
 
+
 
(
i
 
%
 
2
)
 
*
 
2
0
}
 
$
{
x
2
}
 
6
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
"
n
o
n
e
"
 
s
t
r
o
k
e
=
{
c
o
l
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
a
r
c
.
h
i
g
h
l
i
g
h
t
 
?
 
2
.
5
 
:
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
a
c
i
t
y
=
{
a
r
c
.
h
i
g
h
l
i
g
h
t
 
?
 
1
 
:
 
0
.
4
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
t
r
a
n
s
i
t
i
o
n
:
 
"
s
t
r
o
k
e
 
0
.
3
s
,
 
s
t
r
o
k
e
-
w
i
d
t
h
 
0
.
3
s
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
<
/
s
v
g
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
V
i
s
u
a
l
i
z
e
 
s
u
b
t
a
b
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
S
e
g
V
i
z
(
)
 
{


 
 
c
o
n
s
t
 
[
i
n
p
u
t
,
 
s
e
t
I
n
p
u
t
]
 
=
 
u
s
e
S
t
a
t
e
(
"
3
,
 
1
,
 
4
,
 
1
,
 
5
,
 
9
,
 
2
,
 
6
"
)
;


 
 
c
o
n
s
t
 
[
s
e
g
O
p
,
 
s
e
t
S
e
g
O
p
]
 
=
 
u
s
e
S
t
a
t
e
<
S
e
g
O
p
>
(
"
b
u
i
l
d
"
)
;


 
 
c
o
n
s
t
 
[
o
p
,
 
s
e
t
O
p
]
 
=
 
u
s
e
S
t
a
t
e
<
A
g
g
>
(
"
s
u
m
"
)
;


 
 
c
o
n
s
t
 
[
q
l
,
 
s
e
t
Q
l
]
 
=
 
u
s
e
S
t
a
t
e
(
1
)
;


 
 
c
o
n
s
t
 
[
q
h
,
 
s
e
t
Q
h
]
 
=
 
u
s
e
S
t
a
t
e
(
5
)
;


 
 
c
o
n
s
t
 
[
u
p
I
d
x
,
 
s
e
t
U
p
I
d
x
]
 
=
 
u
s
e
S
t
a
t
e
(
2
)
;


 
 
c
o
n
s
t
 
[
u
p
V
a
l
,
 
s
e
t
U
p
V
a
l
]
 
=
 
u
s
e
S
t
a
t
e
(
1
0
)
;




 
 
c
o
n
s
t
 
p
a
r
s
e
d
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
p
a
r
s
e
A
r
r
(
i
n
p
u
t
)
 
?
?
 
[
3
,
 
1
,
 
4
,
 
1
,
 
5
,
 
9
,
 
2
,
 
6
]
,
 
[
i
n
p
u
t
]
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
s
a
f
e
Q
l
 
=
 
M
a
t
h
.
m
a
x
(
0
,
 
M
a
t
h
.
m
i
n
(
q
l
,
 
p
a
r
s
e
d
.
l
e
n
g
t
h
 
-
 
1
)
)
;


 
 
 
 
c
o
n
s
t
 
s
a
f
e
Q
h
 
=
 
M
a
t
h
.
m
a
x
(
0
,
 
M
a
t
h
.
m
i
n
(
q
h
,
 
p
a
r
s
e
d
.
l
e
n
g
t
h
 
-
 
1
)
)
;


 
 
 
 
c
o
n
s
t
 
s
a
f
e
U
p
 
=
 
M
a
t
h
.
m
a
x
(
0
,
 
M
a
t
h
.
m
i
n
(
u
p
I
d
x
,
 
p
a
r
s
e
d
.
l
e
n
g
t
h
 
-
 
1
)
)
;


 
 
 
 
r
e
t
u
r
n
 
b
u
i
l
d
S
e
g
F
r
a
m
e
s
(
p
a
r
s
e
d
,
 
s
e
g
O
p
,
 
o
p
,
 
s
a
f
e
Q
l
,
 
s
a
f
e
Q
h
,
 
s
a
f
e
U
p
,
 
u
p
V
a
l
)
;


 
 
}
,
 
[
p
a
r
s
e
d
,
 
s
e
g
O
p
,
 
o
p
,
 
q
l
,
 
q
h
,
 
u
p
I
d
x
,
 
u
p
V
a
l
]
)
;




 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;


 
 
c
o
n
s
t
 
p
s
e
u
d
o
 
=
 
s
e
g
O
p
 
=
=
=
 
"
b
u
i
l
d
"
 
?
 
B
U
I
L
D
_
P
S
E
U
D
O
 
:
 
s
e
g
O
p
 
=
=
=
 
"
q
u
e
r
y
"
 
?
 
Q
U
E
R
Y
_
P
S
E
U
D
O
 
:
 
U
P
D
A
T
E
_
P
S
E
U
D
O
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
{
`
S
e
g
m
e
n
t
 
T
r
e
e
,
 
$
{
s
e
g
O
p
}
 
(
$
{
o
p
}
)
`
}


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
I
n
p
u
t
 
a
r
r
a
y
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
i
n
p
u
t
}


 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
e
.
g
.
 
3
,
 
1
,
 
4
,
 
1
,
 
5
"


 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
T
r
e
e
 
i
s
 
b
u
i
l
t
 
o
v
e
r
 
t
h
i
s
 
a
r
r
a
y
.
 
L
e
a
v
e
s
 
=
 
e
l
e
m
e
n
t
s
;
 
i
n
t
e
r
n
a
l
 
n
o
d
e
s
 
=
 
a
g
g
r
e
g
a
t
e
s
.
"


 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
P
i
-
d
i
g
i
t
s
"
,
 
v
a
l
u
e
:
 
"
3
,
 
1
,
 
4
,
 
1
,
 
5
,
 
9
,
 
2
,
 
6
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
S
m
a
l
l
"
,
 
v
a
l
u
e
:
 
"
5
,
 
2
,
 
8
,
 
1
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
S
o
r
t
e
d
"
,
 
v
a
l
u
e
:
 
"
1
,
 
2
,
 
3
,
 
4
,
 
5
,
 
6
,
 
7
,
 
8
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
)
 
=
>
 
{
 
i
f
 
(
p
a
r
s
e
A
r
r
(
v
)
)
 
s
e
t
I
n
p
u
t
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>
/
 
o
p
e
r
a
t
i
o
n
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
(
[
"
b
u
i
l
d
"
,
 
"
q
u
e
r
y
"
,
 
"
u
p
d
a
t
e
"
]
 
a
s
 
S
e
g
O
p
[
]
)
.
m
a
p
(
(
m
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
B
u
t
t
o
n
 
k
e
y
=
{
m
}
 
a
c
t
i
v
e
=
{
s
e
g
O
p
 
=
=
=
 
m
}
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
S
e
g
O
p
(
m
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
1
p
x
]
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
c
a
p
i
t
a
l
i
z
e
"
>
{
m
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
i
l
l
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>
/
 
a
g
g
r
e
g
a
t
e
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
(
[
"
s
u
m
"
,
 
"
m
i
n
"
,
 
"
m
a
x
"
]
 
a
s
 
A
g
g
[
]
)
.
m
a
p
(
(
k
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
B
u
t
t
o
n
 
k
e
y
=
{
k
}
 
a
c
t
i
v
e
=
{
o
p
 
=
=
=
 
k
}
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
O
p
(
k
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
1
p
x
]
 
f
o
n
t
-
s
e
m
i
b
o
l
d
"
>
{
k
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
i
l
l
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
{
s
e
g
O
p
 
=
=
=
 
"
q
u
e
r
y
"
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>
r
a
n
g
e
:
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
n
u
m
b
e
r
"
 
v
a
l
u
e
=
{
q
l
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
Q
l
(
N
u
m
b
e
r
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
1
6
 
p
x
-
2
 
p
y
-
1
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
o
n
o
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
o
u
t
l
i
n
e
-
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>
–
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
n
u
m
b
e
r
"
 
v
a
l
u
e
=
{
q
h
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
Q
h
(
N
u
m
b
e
r
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
1
6
 
p
x
-
2
 
p
y
-
1
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
o
n
o
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
o
u
t
l
i
n
e
-
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
{
s
e
g
O
p
 
=
=
=
 
"
u
p
d
a
t
e
"
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>
i
d
x
:
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
n
u
m
b
e
r
"
 
v
a
l
u
e
=
{
u
p
I
d
x
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
U
p
I
d
x
(
N
u
m
b
e
r
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
1
6
 
p
x
-
2
 
p
y
-
1
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
o
n
o
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
o
u
t
l
i
n
e
-
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>
=
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
n
u
m
b
e
r
"
 
v
a
l
u
e
=
{
u
p
V
a
l
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
U
p
V
a
l
(
N
u
m
b
e
r
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
1
6
 
p
x
-
2
 
p
y
-
1
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
o
n
o
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
o
u
t
l
i
n
e
-
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
p
s
e
u
d
o
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
/
>
}


 
 
 
 
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
/
 
s
e
g
m
e
n
t
 
t
r
e
e
 
(
v
a
l
u
e
 
·
 
[
r
a
n
g
e
]
)


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
p
-
2
 
o
v
e
r
f
l
o
w
-
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
S
e
g
T
r
e
e
S
V
G
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
w
i
d
t
h
=
{
6
2
0
}
 
h
e
i
g
h
t
=
{
3
0
0
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
/
 
u
n
d
e
r
l
y
i
n
g
 
a
r
r
a
y


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
p
-
3
 
o
v
e
r
f
l
o
w
-
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
a
y
B
a
r
s
L
o
c
a
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
s
=
{
p
a
r
s
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
t
e
s
=
{
f
r
a
m
e
?
.
a
r
r
S
t
a
t
e
s
 
?
?
 
p
a
r
s
e
d
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
n
d
o
w
R
a
n
g
e
=
{
s
e
g
O
p
 
=
=
=
 
"
q
u
e
r
y
"
 
?
 
[
M
a
t
h
.
m
i
n
(
q
l
,
 
q
h
)
,
 
M
a
t
h
.
m
a
x
(
q
l
,
 
q
h
)
]
 
:
 
u
n
d
e
f
i
n
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
"
>
{
f
r
a
m
e
?
.
m
e
s
s
a
g
e
 
?
?
 
"
P
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
e
p
 
t
h
r
o
u
g
h
.
"
}
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
F
e
n
w
i
c
k
V
i
z
(
)
 
{


 
 
c
o
n
s
t
 
[
i
n
p
u
t
,
 
s
e
t
I
n
p
u
t
]
 
=
 
u
s
e
S
t
a
t
e
(
"
3
,
 
1
,
 
4
,
 
1
,
 
5
,
 
9
,
 
2
,
 
6
"
)
;


 
 
c
o
n
s
t
 
[
m
o
d
e
,
 
s
e
t
M
o
d
e
]
 
=
 
u
s
e
S
t
a
t
e
<
"
p
r
e
f
i
x
"
 
|
 
"
u
p
d
a
t
e
"
>
(
"
p
r
e
f
i
x
"
)
;


 
 
c
o
n
s
t
 
[
q
i
,
 
s
e
t
Q
i
]
 
=
 
u
s
e
S
t
a
t
e
(
4
)
;


 
 
c
o
n
s
t
 
[
u
i
,
 
s
e
t
U
i
]
 
=
 
u
s
e
S
t
a
t
e
(
2
)
;


 
 
c
o
n
s
t
 
[
u
d
,
 
s
e
t
U
d
]
 
=
 
u
s
e
S
t
a
t
e
(
3
)
;




 
 
c
o
n
s
t
 
p
a
r
s
e
d
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
p
a
r
s
e
A
r
r
(
i
n
p
u
t
)
 
?
?
 
[
3
,
 
1
,
 
4
,
 
1
,
 
5
,
 
9
,
 
2
,
 
6
]
,
 
[
i
n
p
u
t
]
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
s
a
f
e
Q
i
 
=
 
M
a
t
h
.
m
a
x
(
0
,
 
M
a
t
h
.
m
i
n
(
q
i
,
 
p
a
r
s
e
d
.
l
e
n
g
t
h
 
-
 
1
)
)
;


 
 
 
 
c
o
n
s
t
 
s
a
f
e
U
i
 
=
 
M
a
t
h
.
m
a
x
(
0
,
 
M
a
t
h
.
m
i
n
(
u
i
,
 
p
a
r
s
e
d
.
l
e
n
g
t
h
 
-
 
1
)
)
;


 
 
 
 
r
e
t
u
r
n
 
b
u
i
l
d
F
e
n
F
r
a
m
e
s
(
p
a
r
s
e
d
,
 
m
o
d
e
,
 
s
a
f
e
Q
i
,
 
s
a
f
e
U
i
,
 
u
d
)
;


 
 
}
,
 
[
p
a
r
s
e
d
,
 
m
o
d
e
,
 
q
i
,
 
u
i
,
 
u
d
]
)
;




 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;


 
 
c
o
n
s
t
 
p
s
e
u
d
o
 
=
 
m
o
d
e
 
=
=
=
 
"
p
r
e
f
i
x
"
 
?
 
F
E
N
_
Q
U
E
R
Y
_
P
S
E
U
D
O
 
:
 
F
E
N
_
U
P
D
A
T
E
_
P
S
E
U
D
O
;


 
 
c
o
n
s
t
 
b
i
t
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
b
u
i
l
d
B
I
T
(
p
a
r
s
e
d
)
,
 
[
p
a
r
s
e
d
]
)
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
{
`
F
e
n
w
i
c
k
 
/
 
B
I
T
,
 
$
{
m
o
d
e
}
`
}


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
I
n
p
u
t
 
a
r
r
a
y
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
i
n
p
u
t
}


 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
e
.
g
.
 
3
,
 
1
,
 
4
"


 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
B
I
T
 
s
t
o
r
e
s
 
a
g
g
r
e
g
a
t
e
s
 
o
v
e
r
 
r
a
n
g
e
s
 
d
e
t
e
r
m
i
n
e
d
 
b
y
 
l
o
w
e
s
t
-
s
e
t
-
b
i
t
 
a
r
i
t
h
m
e
t
i
c
.
"


 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
C
l
a
s
s
i
c
"
,
 
v
a
l
u
e
:
 
"
3
,
 
1
,
 
4
,
 
1
,
 
5
,
 
9
,
 
2
,
 
6
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
O
n
e
s
"
,
 
v
a
l
u
e
:
 
"
1
,
 
1
,
 
1
,
 
1
,
 
1
,
 
1
,
 
1
,
 
1
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
G
r
o
w
i
n
g
"
,
 
v
a
l
u
e
:
 
"
1
,
 
2
,
 
3
,
 
4
,
 
5
,
 
6
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
)
 
=
>
 
{
 
i
f
 
(
p
a
r
s
e
A
r
r
(
v
)
)
 
s
e
t
I
n
p
u
t
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>
/
 
m
o
d
e
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
B
u
t
t
o
n
 
a
c
t
i
v
e
=
{
m
o
d
e
 
=
=
=
 
"
p
r
e
f
i
x
"
}
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
M
o
d
e
(
"
p
r
e
f
i
x
"
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
1
p
x
]
 
f
o
n
t
-
s
e
m
i
b
o
l
d
"
>
P
r
e
f
i
x
 
s
u
m
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
i
l
l
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
B
u
t
t
o
n
 
a
c
t
i
v
e
=
{
m
o
d
e
 
=
=
=
 
"
u
p
d
a
t
e
"
}
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
M
o
d
e
(
"
u
p
d
a
t
e
"
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
1
p
x
]
 
f
o
n
t
-
s
e
m
i
b
o
l
d
"
>
U
p
d
a
t
e
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
i
l
l
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
p
r
e
f
i
x
"
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>
u
p
 
t
o
 
i
d
x
:
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
n
u
m
b
e
r
"
 
v
a
l
u
e
=
{
q
i
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
Q
i
(
N
u
m
b
e
r
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
1
6
 
p
x
-
2
 
p
y
-
1
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
o
n
o
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
o
u
t
l
i
n
e
-
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>
i
d
x
:
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
n
u
m
b
e
r
"
 
v
a
l
u
e
=
{
u
i
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
U
i
(
N
u
m
b
e
r
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
1
6
 
p
x
-
2
 
p
y
-
1
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
o
n
o
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
o
u
t
l
i
n
e
-
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>
+
=
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
n
u
m
b
e
r
"
 
v
a
l
u
e
=
{
u
d
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
U
d
(
N
u
m
b
e
r
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
1
6
 
p
x
-
2
 
p
y
-
1
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
o
n
o
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
o
u
t
l
i
n
e
-
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
p
s
e
u
d
o
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
/
>
}


 
 
 
 
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
/
 
o
r
i
g
i
n
a
l
 
a
r
r
a
y


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
p
-
3
 
o
v
e
r
f
l
o
w
-
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
a
y
B
a
r
s
L
o
c
a
l
 
v
a
l
u
e
s
=
{
p
a
r
s
e
d
}
 
s
t
a
t
e
s
=
{
f
r
a
m
e
?
.
a
r
r
S
t
a
t
e
s
 
?
?
 
p
a
r
s
e
d
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
/
 
B
I
T
 
a
r
r
a
y
 
(
1
-
i
n
d
e
x
e
d
,
 
b
i
t
[
0
]
 
u
n
u
s
e
d
)


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
p
-
3
 
o
v
e
r
f
l
o
w
-
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
a
y
B
a
r
s
L
o
c
a
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
s
=
{
b
i
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
t
e
s
=
{
f
r
a
m
e
?
.
b
i
t
S
t
a
t
e
s
 
?
?
 
b
i
t
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
B
I
T
A
r
c
s
 
a
r
c
s
=
{
f
r
a
m
e
.
a
r
c
}
 
n
=
{
b
i
t
.
l
e
n
g
t
h
 
-
 
1
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
"
>


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
?
.
m
e
s
s
a
g
e
 
?
?
 
"
P
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
e
p
 
t
h
r
o
u
g
h
.
"
}
 
E
a
c
h
 
B
I
T
 
i
n
d
e
x
 
i
 
c
o
v
e
r
s


 
 
 
 
 
 
 
 
 
 
[
i
 
-
 
l
o
w
b
i
t
(
i
)
 
+
 
1
,
 
i
]
.
 
J
u
m
p
s
 
u
s
e
 
i
 
+
=
 
i
 
&
a
m
p
;
 
-
i
 
(
u
p
d
a
t
e
)
 
o
r
 
i
 
-
=
 
i
 
&
a
m
p
;
 
-
i
 
(
q
u
e
r
y
)
.


 
 
 
 
 
 
 
 
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




t
y
p
e
 
V
i
z
T
a
b
 
=
 
"
s
e
g
"
 
|
 
"
f
e
n
w
i
c
k
"
;




f
u
n
c
t
i
o
n
 
V
i
s
u
a
l
i
z
e
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
[
t
a
b
,
 
s
e
t
T
a
b
]
 
=
 
u
s
e
S
t
a
t
e
<
V
i
z
T
a
b
>
(
"
s
e
g
"
)
;


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
4
"
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
<
P
i
l
l
B
u
t
t
o
n
 
a
c
t
i
v
e
=
{
t
a
b
 
=
=
=
 
"
s
e
g
"
}
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
T
a
b
(
"
s
e
g
"
)
}
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
1
p
x
]
 
f
o
n
t
-
s
e
m
i
b
o
l
d
"
>
S
e
g
m
e
n
t
 
T
r
e
e
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
/
P
i
l
l
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
<
P
i
l
l
B
u
t
t
o
n
 
a
c
t
i
v
e
=
{
t
a
b
 
=
=
=
 
"
f
e
n
w
i
c
k
"
}
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
T
a
b
(
"
f
e
n
w
i
c
k
"
)
}
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
1
p
x
]
 
f
o
n
t
-
s
e
m
i
b
o
l
d
"
>
F
e
n
w
i
c
k
 
(
B
I
T
)
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
/
P
i
l
l
B
u
t
t
o
n
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
{
t
a
b
 
=
=
=
 
"
s
e
g
"
 
?
 
<
S
e
g
V
i
z
 
/
>
 
:
 
<
F
e
n
w
i
c
k
V
i
z
 
/
>
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
e
a
r
n
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
L
e
a
r
n
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
i
t
e
m
s
 
=
 
[


 
 
 
 
{
 
t
i
t
l
e
:
 
"
S
e
g
m
e
n
t
 
t
r
e
e
 
s
h
a
p
e
"
,
 
b
o
d
y
:
 
"
F
u
l
l
 
b
i
n
a
r
y
 
t
r
e
e
 
o
v
e
r
 
a
r
r
a
y
 
i
n
d
i
c
e
s
.
 
L
e
a
v
e
s
 
=
 
e
l
e
m
e
n
t
s
.
 
E
a
c
h
 
i
n
t
e
r
n
a
l
 
n
o
d
e
 
c
o
v
e
r
s
 
[
l
o
,
h
i
]
 
a
n
d
 
s
t
o
r
e
s
 
t
h
e
 
a
g
g
r
e
g
a
t
e
 
o
f
 
t
h
a
t
 
r
a
n
g
e
.
 
O
(
4
n
)
 
m
e
m
o
r
y
 
i
s
 
a
 
s
a
f
e
 
u
p
p
e
r
 
b
o
u
n
d
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
R
a
n
g
e
 
q
u
e
r
y
 
=
 
O
(
l
o
g
 
n
)
"
,
 
b
o
d
y
:
 
"
W
a
l
k
 
d
o
w
n
:
 
i
f
 
n
o
d
e
 
i
s
 
f
u
l
l
y
 
i
n
s
i
d
e
 
t
h
e
 
q
u
e
r
y
 
u
s
e
 
i
t
s
 
v
a
l
u
e
.
 
F
u
l
l
y
 
o
u
t
s
i
d
e
 
s
k
i
p
.
 
P
a
r
t
i
a
l
 
r
e
c
u
r
s
e
 
b
o
t
h
 
k
i
d
s
.
 
A
t
 
m
o
s
t
 
O
(
l
o
g
 
n
)
 
n
o
d
e
s
 
a
r
e
 
e
v
e
r
 
t
o
u
c
h
e
d
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
P
o
i
n
t
 
u
p
d
a
t
e
 
=
 
O
(
l
o
g
 
n
)
"
,
 
b
o
d
y
:
 
"
U
p
d
a
t
e
 
t
h
e
 
l
e
a
f
,
 
t
h
e
n
 
w
a
l
k
 
u
p
 
t
h
e
 
c
h
a
i
n
 
o
f
 
a
n
c
e
s
t
o
r
s
 
a
n
d
 
r
e
c
o
m
b
i
n
e
.
 
O
n
l
y
 
t
h
e
 
o
n
e
 
r
o
o
t
-
t
o
-
l
e
a
f
 
p
a
t
h
 
c
h
a
n
g
e
s
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
F
e
n
w
i
c
k
 
t
r
e
e
 
(
B
I
T
)
"
,
 
b
o
d
y
:
 
"
C
l
e
v
e
r
 
a
r
r
a
y
 
t
h
a
t
 
s
u
p
p
o
r
t
s
 
p
r
e
f
i
x
-
s
u
m
 
a
n
d
 
p
o
i
n
t
-
u
p
d
a
t
e
 
i
n
 
O
(
l
o
g
 
n
)
 
u
s
i
n
g
 
t
h
e
 
b
i
t
 
t
r
i
c
k
 
i
 
±
 
(
i
 
&
 
−
i
)
.
 
H
a
l
f
 
t
h
e
 
c
o
d
e
 
o
f
 
a
 
s
e
g
m
e
n
t
 
t
r
e
e
 
f
o
r
 
s
u
m
 
q
u
e
r
i
e
s
.
"
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
5
"
>


 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>
r
a
n
g
e
 
q
u
e
r
i
e
s
 
i
n
 
l
o
g
 
t
i
m
e
<
/
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
T
i
t
l
e
>
S
e
g
m
e
n
t
 
t
r
e
e
s
 
a
n
d
 
F
e
n
w
i
c
k
 
t
r
e
e
s
<
/
S
e
c
t
i
o
n
T
i
t
l
e
>


 
 
 
 
 
 
 
 
<
L
e
d
e
>


 
 
 
 
 
 
 
 
 
 
G
i
v
e
n
 
a
n
 
a
r
r
a
y
 
a
n
d
 
m
a
n
y
 
q
u
e
r
i
e
s
 
o
f
 
t
h
e
 
f
o
r
m
 
"
s
u
m
/
m
i
n
/
m
a
x
 
o
f
 
a
r
r
[
l
.
.
r
]
"
 
p
l
u
s
 
o
c
c
a
s
i
o
n
a
l


 
 
 
 
 
 
 
 
 
 
u
p
d
a
t
e
s
,
 
b
o
t
h
 
s
e
g
m
e
n
t
 
t
r
e
e
s
 
a
n
d
 
F
e
n
w
i
c
k
 
t
r
e
e
s
 
g
i
v
e
 
O
(
l
o
g
 
n
)
 
p
e
r
 
o
p
e
r
a
t
i
o
n
.


 
 
 
 
 
 
 
 
<
/
L
e
d
e
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
s
m
:
g
r
i
d
-
c
o
l
s
-
2
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
{
i
t
e
m
s
.
m
a
p
(
(
s
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
p
-
5
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
l
i
m
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
4
0
0
 
m
b
-
2
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
u
p
p
e
r
c
a
s
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
0
{
i
 
+
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
m
b
-
1
.
5
"
>
{
s
.
t
i
t
l
e
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>
{
s
.
b
o
d
y
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
r
y
 
I
t
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
T
r
y
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
p
r
o
b
l
e
m
s
 
=
 
[


 
 
 
 
{
 
q
:
 
"
S
e
g
m
e
n
t
 
t
r
e
e
 
o
n
 
[
3
,
1
,
4
,
1
,
5
]
.
 
s
u
m
 
o
f
 
[
1
.
.
3
]
?
"
,
 
a
:
 
"
6
"
 
}
,


 
 
 
 
{
 
q
:
 
"
S
a
m
e
 
a
r
r
a
y
,
 
m
i
n
 
o
f
 
[
0
.
.
4
]
?
"
,
 
a
:
 
"
1
"
 
}
,


 
 
 
 
{
 
q
:
 
"
B
I
T
 
f
o
r
 
[
1
,
1
,
1
,
1
,
1
]
.
 
b
i
t
[
4
]
 
(
4
 
=
 
1
0
0
₂
)
 
c
o
v
e
r
s
 
h
o
w
 
m
a
n
y
 
o
r
i
g
i
n
a
l
 
i
n
d
i
c
e
s
?
"
,
 
a
:
 
"
4
"
 
}
,


 
 
 
 
{
 
q
:
 
"
T
i
m
e
 
f
o
r
 
k
 
q
u
e
r
i
e
s
 
+
 
k
 
u
p
d
a
t
e
s
 
o
n
 
n
-
a
r
r
a
y
 
u
s
i
n
g
 
s
e
g
m
e
n
t
 
t
r
e
e
?
"
,
 
a
:
 
"
O
(
k
 
l
o
g
 
n
)
"
 
}
,


 
 
]
;


 
 
c
o
n
s
t
 
[
g
,
 
s
e
t
G
]
 
=
 
u
s
e
S
t
a
t
e
<
(
s
t
r
i
n
g
 
|
 
n
u
l
l
)
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
n
u
l
l
)
)
;


 
 
c
o
n
s
t
 
[
s
,
 
s
e
t
S
]
 
=
 
u
s
e
S
t
a
t
e
<
b
o
o
l
e
a
n
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
f
a
l
s
e
)
)
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
D
r
a
w
 
t
h
e
 
t
r
e
e
 
o
r
 
B
I
T
 
b
y
 
h
a
n
d
 
f
o
r
 
e
a
c
h
.
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
{
p
r
o
b
l
e
m
s
.
m
a
p
(
(
p
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
g
v
 
=
 
(
g
[
i
]
 
?
?
 
"
"
)
.
r
e
p
l
a
c
e
(
/
\
s
+
/
g
,
 
"
"
)
.
t
o
L
o
w
e
r
C
a
s
e
(
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
r
r
e
c
t
 
=
 
g
v
 
=
=
=
 
p
.
a
.
r
e
p
l
a
c
e
(
/
\
s
+
/
g
,
 
"
"
)
.
t
o
L
o
w
e
r
C
a
s
e
(
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
p
-
4
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
3
 
f
l
e
x
-
w
r
a
p
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
x
s
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
f
o
n
t
-
m
o
n
o
"
>
#
{
i
 
+
 
1
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
f
l
e
x
-
1
 
m
i
n
-
w
-
0
 
b
a
s
i
s
-
6
4
"
>
{
p
.
q
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
a
n
s
w
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
g
[
i
]
 
?
?
 
"
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
{
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
g
]
;
 
v
[
i
]
 
=
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
;
 
s
e
t
G
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
6
 
p
x
-
3
 
p
y
-
1
.
5
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
o
n
o
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
o
u
t
l
i
n
e
-
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
{
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
s
]
;
 
v
[
i
]
 
=
 
t
r
u
e
;
 
s
e
t
S
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
3
 
p
y
-
1
.
5
 
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
t
e
x
t
-
x
s
 
f
o
n
t
-
b
o
l
d
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
5
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
w
h
i
t
e
/
3
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
v
e
a
l


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
[
i
]
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
t
e
x
t
-
x
s
 
f
o
n
t
-
b
o
l
d
 
p
x
-
3
 
p
y
-
1
.
5
 
r
o
u
n
d
e
d
-
m
d
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
r
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
l
i
m
e
-
5
0
 
d
a
r
k
:
b
g
-
l
i
m
e
-
4
0
0
/
1
0
 
t
e
x
t
-
l
i
m
e
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
2
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
r
o
s
e
-
5
0
 
d
a
r
k
:
b
g
-
r
o
s
e
-
5
0
0
/
1
0
 
t
e
x
t
-
r
o
s
e
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
r
o
s
e
-
2
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
r
o
s
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
r
r
e
c
t
 
?
 
"
C
o
r
r
e
c
t
"
 
:
 
`
A
n
s
w
e
r
:
 
$
{
p
.
a
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
I
n
s
i
g
h
t
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
I
n
s
i
g
h
t
T
a
b
(
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
4
"
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
p
-
5
"
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
S
e
g
m
e
n
t
 
t
r
e
e
 
v
s
 
F
e
n
w
i
c
k
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
F
e
n
w
i
c
k
 
w
i
n
s
 
o
n
 
s
i
m
p
l
i
c
i
t
y
 
a
n
d
 
c
o
n
s
t
a
n
t
s
 
b
u
t
 
o
n
l
y
 
w
o
r
k
s
 
f
o
r
 
i
n
v
e
r
t
i
b
l
e
 
o
p
e
r
a
t
i
o
n
s
 
(
s
u
m
,


 
 
 
 
 
 
 
 
 
 
x
o
r
)
.
 
F
o
r
 
m
i
n
/
m
a
x
/
g
c
d
,
 
y
o
u
 
n
e
e
d
 
a
 
s
e
g
m
e
n
t
 
t
r
e
e
.
 
S
e
g
m
e
n
t
 
t
r
e
e
s
 
a
l
s
o
 
g
e
n
e
r
a
l
i
z
e
 
t
o
 
l
a
z
y


 
 
 
 
 
 
 
 
 
 
p
r
o
p
a
g
a
t
i
o
n
 
f
o
r
 
r
a
n
g
e
-
u
p
d
a
t
e
/
r
a
n
g
e
-
q
u
e
r
y
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
p
-
5
"
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
W
h
y
 
i
 
&
a
m
p
;
 
-
i
 
w
o
r
k
s
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
I
n
 
t
w
o
'
s
 
c
o
m
p
l
e
m
e
n
t
,
 
<
I
n
l
i
n
e
C
o
d
e
>
i
 
&
a
m
p
;
 
-
i
<
/
I
n
l
i
n
e
C
o
d
e
>
 
i
s
o
l
a
t
e
s
 
t
h
e
 
l
o
w
e
s
t
 
s
e
t
 
b
i
t
 
o
f
 
i
.


 
 
 
 
 
 
 
 
 
 
T
h
a
t
 
b
i
t
 
t
e
l
l
s
 
h
o
w
 
m
a
n
y
 
e
l
e
m
e
n
t
s
 
<
I
n
l
i
n
e
C
o
d
e
>
b
i
t
[
i
]
<
/
I
n
l
i
n
e
C
o
d
e
>
 
i
s
 
r
e
s
p
o
n
s
i
b
l
e
 
f
o
r
,
 
t
h
e


 
 
 
 
 
 
 
 
 
 
r
a
n
g
e
s
 
f
i
t
 
t
o
g
e
t
h
e
r
 
l
i
k
e
 
a
 
p
u
z
z
l
e
,
 
c
o
v
e
r
i
n
g
 
e
v
e
r
y
 
p
r
e
f
i
x
 
i
n
 
O
(
l
o
g
 
n
)
 
p
i
e
c
e
s
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
p
-
5
"
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
B
e
y
o
n
d
 
p
l
a
i
n
 
r
a
n
g
e
s
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
C
o
m
p
e
t
i
t
i
v
e
 
p
r
o
g
r
a
m
m
i
n
g
 
e
x
t
e
n
d
s
 
s
e
g
m
e
n
t
 
t
r
e
e
s
 
w
i
t
h
 
l
a
z
y
 
p
r
o
p
a
g
a
t
i
o
n
 
(
r
a
n
g
e
-
u
p
d
a
t
e
)
,


 
 
 
 
 
 
 
 
 
 
p
e
r
s
i
s
t
e
n
t
 
t
r
e
e
s
 
(
t
i
m
e
 
t
r
a
v
e
l
)
,
 
2
D
 
s
e
g
m
e
n
t
 
t
r
e
e
s
,
 
s
e
g
m
e
n
t
 
t
r
e
e
s
 
o
n
 
t
r
e
e
s
 
(
E
u
l
e
r
 
t
o
u
r
)
,


 
 
 
 
 
 
 
 
 
 
a
n
d
 
H
L
D
,
 
b
u
t
 
e
v
e
r
y
t
h
i
n
g
 
s
t
a
r
t
s
 
f
r
o
m
 
t
h
e
 
b
a
s
i
c
 
b
u
i
l
d
/
q
u
e
r
y
/
u
p
d
a
t
e
 
y
o
u
 
j
u
s
t
 
s
a
w
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
R
o
o
t
 
e
x
p
o
r
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
P
r
o
p
s
 
{


 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
:
 
n
u
m
b
e
r
)
 
=
>
 
v
o
i
d
;


}




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
L
3
_
S
e
g
m
e
n
t
F
e
n
w
i
c
k
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
t
a
b
s
:
 
L
e
s
s
o
n
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
l
e
a
r
n
"
,
 
l
a
b
e
l
:
 
"
L
e
a
r
n
"
,
 
i
c
o
n
:
 
<
B
o
o
k
O
p
e
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
L
e
a
r
n
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
v
i
s
u
a
l
i
z
e
"
,
 
l
a
b
e
l
:
 
"
V
i
s
u
a
l
i
z
e
"
,
 
i
c
o
n
:
 
<
P
l
a
y
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
V
i
s
u
a
l
i
z
e
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
t
r
y
"
,
 
l
a
b
e
l
:
 
"
T
r
y
 
I
t
"
,
 
i
c
o
n
:
 
<
T
a
r
g
e
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
T
r
y
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
i
n
s
i
g
h
t
"
,
 
l
a
b
e
l
:
 
"
I
n
s
i
g
h
t
"
,
 
i
c
o
n
:
 
<
L
i
g
h
t
b
u
l
b
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
I
n
s
i
g
h
t
T
a
b
 
/
>
 
}
,


 
 
 
 
.
.
.
(
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G


 
 
 
 
 
 
?
 
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
d
:
 
"
p
r
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
P
r
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
<
C
o
d
e
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
<
P
r
a
c
t
i
c
e
T
a
b
 
t
o
p
i
c
S
l
u
g
=
{
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
}
 
/
>
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]


 
 
 
 
 
 
:
 
[
]
)
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
T
i
m
e
 
c
o
m
p
l
e
x
i
t
y
 
o
f
 
a
 
r
a
n
g
e
-
s
u
m
 
q
u
e
r
y
 
o
n
 
a
 
s
e
g
m
e
n
t
 
t
r
e
e
 
o
f
 
s
i
z
e
 
n
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
O
(
1
)
"
,
 
"
O
(
l
o
g
 
n
)
"
,
 
"
O
(
√
n
)
"
,
 
"
O
(
n
)
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
E
a
c
h
 
q
u
e
r
y
 
t
o
u
c
h
e
s
 
O
(
l
o
g
 
n
)
 
n
o
d
e
s
,
 
t
h
e
 
m
i
n
i
m
a
l
 
c
o
v
e
r
i
n
g
 
s
e
t
 
o
f
 
f
u
l
l
 
s
u
b
-
r
a
n
g
e
s
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
i
c
h
 
r
a
n
g
e
 
a
g
g
r
e
g
a
t
i
o
n
 
c
a
n
n
o
t
 
b
e
 
h
a
n
d
l
e
d
 
b
y
 
a
 
F
e
n
w
i
c
k
 
t
r
e
e
 
d
i
r
e
c
t
l
y
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
s
u
m
"
,
 
"
x
o
r
"
,
 
"
m
i
n
i
m
u
m
"
,
 
"
c
o
u
n
t
 
(
a
d
d
i
t
i
v
e
)
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
M
i
n
i
m
u
m
 
i
s
 
n
o
n
-
i
n
v
e
r
t
i
b
l
e
,
 
y
o
u
 
c
a
n
n
o
t
 
s
u
b
t
r
a
c
t
 
b
a
c
k
.
 
S
e
g
m
e
n
t
 
t
r
e
e
s
 
h
a
n
d
l
e
 
i
t
;
 
F
e
n
w
i
c
k
 
c
a
n
n
o
t
 
(
f
o
r
 
a
r
b
i
t
r
a
r
y
 
p
o
i
n
t
 
u
p
d
a
t
e
s
)
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
F
o
r
 
a
 
F
e
n
w
i
c
k
 
t
r
e
e
,
 
b
i
t
[
i
]
 
s
t
o
r
e
s
 
t
h
e
 
a
g
g
r
e
g
a
t
e
 
o
v
e
r
:
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
i
n
d
i
c
e
s
 
1
.
.
i
"
,


 
 
 
 
 
 
 
 
"
i
n
d
i
c
e
s
 
i
.
.
n
"
,


 
 
 
 
 
 
 
 
"
i
n
d
i
c
e
s
 
(
i
 
−
 
l
o
w
b
i
t
(
i
)
 
+
 
1
)
 
.
.
 
i
 
(
1
-
i
n
d
e
x
e
d
)
"
,


 
 
 
 
 
 
 
 
"
a
 
r
a
n
d
o
m
 
s
u
b
s
e
t
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
l
o
w
b
i
t
(
i
)
 
=
 
i
 
&
 
−
i
.
 
E
a
c
h
 
B
I
T
 
s
l
o
t
 
c
o
v
e
r
s
 
e
x
a
c
t
l
y
 
t
h
a
t
 
m
a
n
y
 
e
l
e
m
e
n
t
s
 
e
n
d
i
n
g
 
a
t
 
i
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
 
s
e
g
m
e
n
t
 
t
r
e
e
 
f
o
r
 
n
 
l
e
a
v
e
s
 
n
e
e
d
s
 
s
t
o
r
a
g
e
 
o
f
 
a
t
 
m
o
s
t
:
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
n
"
,
 
"
2
n
"
,
 
"
4
n
"
,
 
"
n
²
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
4
n
 
i
s
 
t
h
e
 
s
t
a
n
d
a
r
d
 
s
a
f
e
 
b
o
u
n
d
 
b
e
c
a
u
s
e
 
t
h
e
 
c
o
n
c
e
p
t
u
a
l
 
f
u
l
l
 
b
i
n
a
r
y
 
t
r
e
e
 
c
a
n
 
h
a
v
e
 
u
p
 
t
o
 
2
·
2
^
⌈
l
o
g
 
n
⌉
 
≤
 
4
n
 
n
o
d
e
s
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
S
e
g
m
e
n
t
 
&
 
F
e
n
w
i
c
k
 
T
r
e
e
s
"


 
 
 
 
 
 
l
e
v
e
l
=
{
3
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
7
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
R
a
n
g
e
 
q
u
e
r
i
e
s
,
 
i
n
v
e
r
s
i
o
n
 
c
o
u
n
t
,
 
c
o
m
p
e
t
i
t
i
v
e
 
p
r
o
g
r
a
m
m
i
n
g
"


 
 
 
 
 
 
n
e
x
t
L
e
s
s
o
n
H
i
n
t
=
"
B
+
 
T
r
e
e
s
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


