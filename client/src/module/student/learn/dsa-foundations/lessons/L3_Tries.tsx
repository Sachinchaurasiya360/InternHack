
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
 
F
l
a
g
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
t
r
i
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
i
d
l
e
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
f
r
o
n
t
i
e
r
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


 
 
i
d
l
e
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


 
 
f
r
o
n
t
i
e
r
:
 
"
#
f
d
e
6
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
b
f
d
b
f
e
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


 
 
i
d
l
e
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


 
 
f
r
o
n
t
i
e
r
:
 
"
#
f
5
9
e
0
b
"
,


 
 
p
a
t
h
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
 
 
T
r
i
e
 
d
a
t
a
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
T
r
i
e
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


 
 
c
h
i
l
d
r
e
n
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
>
;


 
 
e
n
d
:
 
b
o
o
l
e
a
n
;


}


t
y
p
e
 
T
r
i
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
 
T
r
i
e
N
o
d
e
>
;




l
e
t
 
N
I
D
 
=
 
1
;


f
u
n
c
t
i
o
n
 
m
k
N
o
d
e
(
)
:
 
T
r
i
e
N
o
d
e
 
{
 
r
e
t
u
r
n
 
{
 
i
d
:
 
`
t
$
{
N
I
D
+
+
}
`
,
 
c
h
i
l
d
r
e
n
:
 
{
}
,
 
e
n
d
:
 
f
a
l
s
e
 
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
 
c
l
o
n
e
T
r
i
e
(
t
:
 
T
r
i
e
)
:
 
T
r
i
e
 
{


 
 
c
o
n
s
t
 
o
:
 
T
r
i
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
 
i
d
:
 
n
.
i
d
,
 
c
h
i
l
d
r
e
n
:
 
{
 
.
.
.
n
.
c
h
i
l
d
r
e
n
 
}
,
 
e
n
d
:
 
n
.
e
n
d
 
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
i
e
:
 
T
r
i
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


 
 
e
d
g
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


 
 
h
i
g
h
l
i
g
h
t
E
d
g
e
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
 
i
n
s
e
r
t
W
o
r
d
(
t
:
 
T
r
i
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
 
w
o
r
d
:
 
s
t
r
i
n
g
,
 
f
r
a
m
e
s
:
 
F
r
a
m
e
[
]
)
 
{


 
 
l
e
t
 
c
u
r
 
=
 
r
o
o
t
I
d
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
i
e
:
 
c
l
o
n
e
T
r
i
e
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
c
u
r
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
 
e
d
g
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


 
 
 
 
h
i
g
h
l
i
g
h
t
E
d
g
e
:
 
n
u
l
l
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
I
n
s
e
r
t
 
"
$
{
w
o
r
d
}
"
,
 
s
t
a
r
t
 
a
t
 
r
o
o
t
.
`
,
 
v
a
r
s
:
 
{
 
w
o
r
d
,
 
p
o
s
:
 
0
 
}
,


 
 
}
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
 
w
o
r
d
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


 
 
 
 
c
o
n
s
t
 
c
h
 
=
 
w
o
r
d
[
i
]
;


 
 
 
 
c
o
n
s
t
 
h
a
s
 
=
 
t
[
c
u
r
]
.
c
h
i
l
d
r
e
n
[
c
h
]
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
 
1
,
 
t
r
i
e
:
 
c
l
o
n
e
T
r
i
e
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
c
u
r
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
 
e
d
g
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


 
 
 
 
 
 
h
i
g
h
l
i
g
h
t
E
d
g
e
:
 
n
u
l
l
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
o
o
k
i
n
g
 
f
o
r
 
e
d
g
e
 
"
$
{
c
h
}
"
 
f
r
o
m
 
c
u
r
r
e
n
t
 
n
o
d
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
 
w
o
r
d
,
 
p
o
s
:
 
i
,
 
c
h
a
r
:
 
c
h
,
 
e
x
i
s
t
s
:
 
h
a
s
 
?
 
"
y
e
s
"
 
:
 
"
n
o
"
 
}
,


 
 
 
 
}
)
;


 
 
 
 
l
e
t
 
n
e
x
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


 
 
 
 
i
f
 
(
h
a
s
)
 
{


 
 
 
 
 
 
n
e
x
t
I
d
 
=
 
h
a
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
 
2
,
 
t
r
i
e
:
 
c
l
o
n
e
T
r
i
e
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
c
u
r
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
n
e
x
t
I
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


 
 
 
 
 
 
 
 
e
d
g
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
`
$
{
c
u
r
}
-
$
{
n
e
x
t
I
d
}
`
]
:
 
"
m
a
t
c
h
"
 
}
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
E
d
g
e
:
 
`
$
{
c
u
r
}
-
$
{
n
e
x
t
I
d
}
`
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
E
d
g
e
 
"
$
{
c
h
}
"
 
e
x
i
s
t
s
,
 
f
o
l
l
o
w
 
i
t
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
w
o
r
d
,
 
p
o
s
:
 
i
 
+
 
1
,
 
c
h
a
r
:
 
c
h
 
}
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


 
 
 
 
 
 
c
o
n
s
t
 
n
n
 
=
 
m
k
N
o
d
e
(
)
;


 
 
 
 
 
 
t
[
n
n
.
i
d
]
 
=
 
n
n
;


 
 
 
 
 
 
t
[
c
u
r
]
.
c
h
i
l
d
r
e
n
[
c
h
]
 
=
 
n
n
.
i
d
;


 
 
 
 
 
 
n
e
x
t
I
d
 
=
 
n
n
.
i
d
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
 
t
r
i
e
:
 
c
l
o
n
e
T
r
i
e
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
c
u
r
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
n
e
x
t
I
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


 
 
 
 
 
 
 
 
e
d
g
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
`
$
{
c
u
r
}
-
$
{
n
e
x
t
I
d
}
`
]
:
 
"
f
r
o
n
t
i
e
r
"
 
}
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
E
d
g
e
:
 
`
$
{
c
u
r
}
-
$
{
n
e
x
t
I
d
}
`
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
E
d
g
e
 
"
$
{
c
h
}
"
 
m
i
s
s
i
n
g
,
 
c
r
e
a
t
e
 
n
e
w
 
n
o
d
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
 
w
o
r
d
,
 
p
o
s
:
 
i
 
+
 
1
,
 
c
h
a
r
:
 
c
h
,
 
c
r
e
a
t
e
d
:
 
"
y
e
s
"
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}


 
 
 
 
c
u
r
 
=
 
n
e
x
t
I
d
;


 
 
}


 
 
t
[
c
u
r
]
.
e
n
d
 
=
 
t
r
u
e
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
i
e
:
 
c
l
o
n
e
T
r
i
e
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
c
u
r
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
 
e
d
g
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


 
 
 
 
h
i
g
h
l
i
g
h
t
E
d
g
e
:
 
n
u
l
l
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
M
a
r
k
 
n
o
d
e
 
a
s
 
e
n
d
-
o
f
-
w
o
r
d
.
 
"
$
{
w
o
r
d
}
"
 
i
n
s
e
r
t
e
d
.
`
,


 
 
 
 
v
a
r
s
:
 
{
 
w
o
r
d
,
 
i
n
s
e
r
t
e
d
:
 
"
y
e
s
"
 
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
 
s
e
a
r
c
h
W
o
r
d
(
t
:
 
T
r
i
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
 
w
o
r
d
:
 
s
t
r
i
n
g
,
 
f
r
a
m
e
s
:
 
F
r
a
m
e
[
]
)
 
{


 
 
l
e
t
 
c
u
r
 
=
 
r
o
o
t
I
d
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
i
e
:
 
c
l
o
n
e
T
r
i
e
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
c
u
r
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
 
e
d
g
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
 
h
i
g
h
l
i
g
h
t
E
d
g
e
:
 
n
u
l
l
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
S
e
a
r
c
h
 
"
$
{
w
o
r
d
}
"
,
 
s
t
a
r
t
 
a
t
 
r
o
o
t
.
`
,
 
v
a
r
s
:
 
{
 
w
o
r
d
,
 
p
o
s
:
 
0
 
}
,


 
 
}
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
 
w
o
r
d
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


 
 
 
 
c
o
n
s
t
 
c
h
 
=
 
w
o
r
d
[
i
]
;


 
 
 
 
c
o
n
s
t
 
h
a
s
 
=
 
t
[
c
u
r
]
.
c
h
i
l
d
r
e
n
[
c
h
]
;


 
 
 
 
i
f
 
(
!
h
a
s
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
i
e
:
 
c
l
o
n
e
T
r
i
e
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
c
u
r
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
 
e
d
g
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
 
h
i
g
h
l
i
g
h
t
E
d
g
e
:
 
n
u
l
l
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
N
o
 
e
d
g
e
 
"
$
{
c
h
}
"
,
 
"
$
{
w
o
r
d
}
"
 
i
s
 
N
O
T
 
i
n
 
t
h
e
 
t
r
i
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
 
w
o
r
d
,
 
p
o
s
:
 
i
,
 
r
e
s
u
l
t
:
 
"
n
o
t
 
f
o
u
n
d
"
 
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
i
e
:
 
c
l
o
n
e
T
r
i
e
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
c
u
r
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
h
a
s
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


 
 
 
 
 
 
e
d
g
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
`
$
{
c
u
r
}
-
$
{
h
a
s
}
`
]
:
 
"
m
a
t
c
h
"
 
}
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
E
d
g
e
:
 
`
$
{
c
u
r
}
-
$
{
h
a
s
}
`
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
F
o
l
l
o
w
 
e
d
g
e
 
"
$
{
c
h
}
"
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
w
o
r
d
,
 
p
o
s
:
 
i
 
+
 
1
,
 
c
h
a
r
:
 
c
h
 
}
,


 
 
 
 
}
)
;


 
 
 
 
c
u
r
 
=
 
h
a
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
 
3
,
 
t
r
i
e
:
 
c
l
o
n
e
T
r
i
e
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
c
u
r
]
:
 
t
[
c
u
r
]
.
e
n
d
 
?
 
"
d
o
n
e
"
 
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


 
 
 
 
e
d
g
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
 
h
i
g
h
l
i
g
h
t
E
d
g
e
:
 
n
u
l
l
,


 
 
 
 
m
e
s
s
a
g
e
:
 
t
[
c
u
r
]
.
e
n
d


 
 
 
 
 
 
?
 
`
"
$
{
w
o
r
d
}
"
 
f
o
u
n
d
,
 
n
o
d
e
 
i
s
 
e
n
d
-
o
f
-
w
o
r
d
.
`


 
 
 
 
 
 
:
 
`
R
e
a
c
h
e
d
 
n
o
d
e
 
b
u
t
 
i
t
 
i
s
 
N
O
T
 
a
n
 
e
n
d
-
o
f
-
w
o
r
d
 
m
a
r
k
e
r
,
 
o
n
l
y
 
a
 
p
r
e
f
i
x
.
`
,


 
 
 
 
v
a
r
s
:
 
{
 
w
o
r
d
,
 
r
e
s
u
l
t
:
 
t
[
c
u
r
]
.
e
n
d
 
?
 
"
f
o
u
n
d
"
 
:
 
"
p
r
e
f
i
x
 
o
n
l
y
"
 
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
r
e
f
i
x
C
o
l
l
e
c
t
(
t
:
 
T
r
i
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
 
p
r
e
f
i
x
:
 
s
t
r
i
n
g
,
 
f
r
a
m
e
s
:
 
F
r
a
m
e
[
]
)
 
{


 
 
l
e
t
 
c
u
r
 
=
 
r
o
o
t
I
d
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
i
e
:
 
c
l
o
n
e
T
r
i
e
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
c
u
r
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
 
e
d
g
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
 
h
i
g
h
l
i
g
h
t
E
d
g
e
:
 
n
u
l
l
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
e
a
r
c
h
 
"
$
{
p
r
e
f
i
x
}
"
.
`
,
 
v
a
r
s
:
 
{
 
p
r
e
f
i
x
,
 
p
o
s
:
 
0
 
}
,


 
 
}
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
 
p
r
e
f
i
x
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


 
 
 
 
c
o
n
s
t
 
c
h
 
=
 
p
r
e
f
i
x
[
i
]
;


 
 
 
 
c
o
n
s
t
 
h
a
s
 
=
 
t
[
c
u
r
]
.
c
h
i
l
d
r
e
n
[
c
h
]
;


 
 
 
 
i
f
 
(
!
h
a
s
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
i
e
:
 
c
l
o
n
e
T
r
i
e
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
c
u
r
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
 
e
d
g
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
 
h
i
g
h
l
i
g
h
t
E
d
g
e
:
 
n
u
l
l
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
N
o
 
e
d
g
e
 
"
$
{
c
h
}
"
,
 
n
o
 
w
o
r
d
s
 
s
h
a
r
e
 
p
r
e
f
i
x
 
"
$
{
p
r
e
f
i
x
}
"
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
p
r
e
f
i
x
,
 
r
e
s
u
l
t
:
 
"
n
o
n
e
"
 
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
i
e
:
 
c
l
o
n
e
T
r
i
e
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
c
u
r
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
h
a
s
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


 
 
 
 
 
 
e
d
g
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
`
$
{
c
u
r
}
-
$
{
h
a
s
}
`
]
:
 
"
m
a
t
c
h
"
 
}
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
E
d
g
e
:
 
`
$
{
c
u
r
}
-
$
{
h
a
s
}
`
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
F
o
l
l
o
w
 
e
d
g
e
 
"
$
{
c
h
}
"
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
p
r
e
f
i
x
,
 
p
o
s
:
 
i
 
+
 
1
 
}
,


 
 
 
 
}
)
;


 
 
 
 
c
u
r
 
=
 
h
a
s
;


 
 
}


 
 
c
o
n
s
t
 
s
u
b
t
r
e
e
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
 
=
 
{
 
[
c
u
r
]
:
 
"
d
o
n
e
"
 
}
;


 
 
c
o
n
s
t
 
e
d
g
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
 
=
 
{
}
;


 
 
c
o
n
s
t
 
w
o
r
d
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
 
=
 
[
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
 
d
f
s
(
n
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
 
a
c
c
:
 
s
t
r
i
n
g
)
 
{


 
 
 
 
i
f
 
(
t
[
n
i
d
]
.
e
n
d
)
 
w
o
r
d
s
.
p
u
s
h
(
a
c
c
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
 
[
c
,
 
c
h
i
l
d
]
 
o
f
 
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
t
[
n
i
d
]
.
c
h
i
l
d
r
e
n
)
)
 
{


 
 
 
 
 
 
s
u
b
t
r
e
e
[
c
h
i
l
d
]
 
=
 
"
p
a
t
h
"
;


 
 
 
 
 
 
e
d
g
e
s
[
`
$
{
n
i
d
}
-
$
{
c
h
i
l
d
}
`
]
 
=
 
"
p
a
t
h
"
;


 
 
 
 
 
 
d
f
s
(
c
h
i
l
d
,
 
a
c
c
 
+
 
c
)
;


 
 
 
 
}


 
 
}


 
 
d
f
s
(
c
u
r
,
 
p
r
e
f
i
x
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
 
4
,
 
t
r
i
e
:
 
c
l
o
n
e
T
r
i
e
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
 
s
u
b
t
r
e
e
,
 
e
d
g
e
S
t
a
t
e
s
:
 
e
d
g
e
s
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
E
d
g
e
:
 
n
u
l
l
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
W
o
r
d
s
 
w
i
t
h
 
p
r
e
f
i
x
 
"
$
{
p
r
e
f
i
x
}
"
:
 
[
$
{
w
o
r
d
s
.
j
o
i
n
(
"
,
 
"
)
 
|
|
 
"
n
o
n
e
"
}
]
`
,


 
 
 
 
v
a
r
s
:
 
{
 
p
r
e
f
i
x
,
 
c
o
u
n
t
:
 
w
o
r
d
s
.
l
e
n
g
t
h
 
}
,


 
 
}
)
;


}




c
o
n
s
t
 
P
S
E
U
D
O
_
I
N
S
E
R
T
 
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
 
i
n
s
e
r
t
(
r
o
o
t
,
 
w
o
r
d
)
:
"
,


 
 
"
 
 
c
u
r
 
←
 
r
o
o
t
"
,


 
 
"
 
 
f
o
r
 
c
h
 
i
n
 
w
o
r
d
:
"
,


 
 
"
 
 
 
 
i
f
 
c
u
r
.
c
h
i
l
d
r
e
n
[
c
h
]
 
e
x
i
s
t
s
:
 
c
u
r
 
←
 
c
u
r
.
c
h
i
l
d
r
e
n
[
c
h
]
"
,


 
 
"
 
 
 
 
e
l
s
e
:
 
c
u
r
.
c
h
i
l
d
r
e
n
[
c
h
]
 
←
 
n
e
w
 
N
o
d
e
;
 
c
u
r
 
←
 
c
u
r
.
c
h
i
l
d
r
e
n
[
c
h
]
"
,


 
 
"
 
 
c
u
r
.
e
n
d
 
←
 
t
r
u
e
"
,


]
;




c
o
n
s
t
 
P
S
E
U
D
O
_
S
E
A
R
C
H
 
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
 
s
e
a
r
c
h
(
r
o
o
t
,
 
w
o
r
d
)
:
"
,


 
 
"
 
 
c
u
r
 
←
 
r
o
o
t
"
,


 
 
"
 
 
f
o
r
 
c
h
 
i
n
 
w
o
r
d
:
"
,


 
 
"
 
 
 
 
i
f
 
n
o
t
 
c
u
r
.
c
h
i
l
d
r
e
n
[
c
h
]
:
 
r
e
t
u
r
n
 
f
a
l
s
e
"
,


 
 
"
 
 
 
 
c
u
r
 
←
 
c
u
r
.
c
h
i
l
d
r
e
n
[
c
h
]
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
u
r
.
e
n
d
"
,


]
;




c
o
n
s
t
 
P
S
E
U
D
O
_
P
R
E
F
I
X
 
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
 
s
t
a
r
t
s
W
i
t
h
(
r
o
o
t
,
 
p
r
e
f
i
x
)
:
"
,


 
 
"
 
 
w
a
l
k
 
e
d
g
e
s
 
f
o
r
 
e
a
c
h
 
c
h
 
o
f
 
p
r
e
f
i
x
"
,


 
 
"
 
 
i
f
 
a
n
y
 
e
d
g
e
 
m
i
s
s
i
n
g
:
 
r
e
t
u
r
n
 
n
o
n
e
"
,


 
 
"
 
 
D
F
S
 
f
r
o
m
 
c
u
r
r
e
n
t
 
n
o
d
e
"
,


 
 
"
 
 
c
o
l
l
e
c
t
 
e
v
e
r
y
 
e
n
d
-
o
f
-
w
o
r
d
 
d
e
s
c
e
n
d
a
n
t
"
,


]
;




t
y
p
e
 
O
p
 
=
 
"
i
n
s
e
r
t
"
 
|
 
"
s
e
a
r
c
h
"
 
|
 
"
p
r
e
f
i
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
 
b
u
i
l
d
F
r
a
m
e
s
(
w
o
r
d
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
,
 
o
p
:
 
O
p
,
 
q
u
e
r
y
:
 
s
t
r
i
n
g
)
:
 
F
r
a
m
e
[
]
 
{


 
 
N
I
D
 
=
 
1
;


 
 
c
o
n
s
t
 
t
r
i
e
:
 
T
r
i
e
 
=
 
{
}
;


 
 
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
 
m
k
N
o
d
e
(
)
;


 
 
t
r
i
e
[
r
o
o
t
.
i
d
]
 
=
 
r
o
o
t
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
 
w
 
o
f
 
w
o
r
d
s
)
 
{


 
 
 
 
l
e
t
 
c
u
r
 
=
 
r
o
o
t
.
i
d
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
 
c
h
 
o
f
 
w
)
 
{


 
 
 
 
 
 
i
f
 
(
!
t
r
i
e
[
c
u
r
]
.
c
h
i
l
d
r
e
n
[
c
h
]
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
n
 
=
 
m
k
N
o
d
e
(
)
;


 
 
 
 
 
 
 
 
t
r
i
e
[
n
n
.
i
d
]
 
=
 
n
n
;


 
 
 
 
 
 
 
 
t
r
i
e
[
c
u
r
]
.
c
h
i
l
d
r
e
n
[
c
h
]
 
=
 
n
n
.
i
d
;


 
 
 
 
 
 
}


 
 
 
 
 
 
c
u
r
 
=
 
t
r
i
e
[
c
u
r
]
.
c
h
i
l
d
r
e
n
[
c
h
]
;


 
 
 
 
}


 
 
 
 
t
r
i
e
[
c
u
r
]
.
e
n
d
 
=
 
t
r
u
e
;


 
 
}


 
 
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
i
e
:
 
c
l
o
n
e
T
r
i
e
(
t
r
i
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
 
r
o
o
t
.
i
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
 
e
d
g
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
 
h
i
g
h
l
i
g
h
t
E
d
g
e
:
 
n
u
l
l
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
T
r
i
e
 
w
i
t
h
 
$
{
w
o
r
d
s
.
l
e
n
g
t
h
}
 
p
r
e
-
i
n
s
e
r
t
e
d
 
w
o
r
d
(
s
)
:
 
[
$
{
w
o
r
d
s
.
j
o
i
n
(
"
,
 
"
)
}
]
.
 
O
p
:
 
$
{
o
p
}
(
"
$
{
q
u
e
r
y
}
"
)
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
,
 
q
u
e
r
y
,
 
w
o
r
d
s
:
 
w
o
r
d
s
.
l
e
n
g
t
h
 
}
,


 
 
}
)
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
i
n
s
e
r
t
"
)
 
i
n
s
e
r
t
W
o
r
d
(
t
r
i
e
,
 
r
o
o
t
.
i
d
,
 
q
u
e
r
y
,
 
f
r
a
m
e
s
)
;


 
 
e
l
s
e
 
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
e
a
r
c
h
"
)
 
s
e
a
r
c
h
W
o
r
d
(
t
r
i
e
,
 
r
o
o
t
.
i
d
,
 
q
u
e
r
y
,
 
f
r
a
m
e
s
)
;


 
 
e
l
s
e
 
p
r
e
f
i
x
C
o
l
l
e
c
t
(
t
r
i
e
,
 
r
o
o
t
.
i
d
,
 
q
u
e
r
y
,
 
f
r
a
m
e
s
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
 
 
C
u
s
t
o
m
 
T
r
i
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
l
a
c
e
d
 
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
;
 
c
h
a
r
?
:
 
s
t
r
i
n
g
 
}




f
u
n
c
t
i
o
n
 
l
a
y
o
u
t
T
r
i
e
(


 
 
t
:
 
T
r
i
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


 
 
w
i
d
t
h
:
 
n
u
m
b
e
r
,


 
 
h
e
i
g
h
t
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
 
{
 
p
l
a
c
e
d
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
 
P
l
a
c
e
d
>
;
 
m
a
x
D
e
p
t
h
:
 
n
u
m
b
e
r
 
}
 
{


 
 
l
e
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
 
0
;


 
 
f
u
n
c
t
i
o
n
 
g
e
t
D
e
p
t
h
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
m
a
x
D
e
p
t
h
,
 
d
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
 
c
h
i
l
d
 
o
f
 
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
[
i
d
]
.
c
h
i
l
d
r
e
n
)
)
 
g
e
t
D
e
p
t
h
(
c
h
i
l
d
,
 
d
 
+
 
1
)
;


 
 
}


 
 
g
e
t
D
e
p
t
h
(
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
 
p
l
a
c
e
d
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
 
P
l
a
c
e
d
>
 
=
 
{
}
;


 
 
l
e
t
 
c
o
u
n
t
e
r
 
=
 
0
;


 
 
f
u
n
c
t
i
o
n
 
a
s
s
i
g
n
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
,
 
p
a
r
e
n
t
C
h
a
r
?
:
 
s
t
r
i
n
g
)
 
{


 
 
 
 
c
o
n
s
t
 
e
n
t
r
i
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
e
n
t
r
i
e
s
(
t
[
i
d
]
.
c
h
i
l
d
r
e
n
)
.
s
o
r
t
(
)
;


 
 
 
 
i
f
 
(
e
n
t
r
i
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
 
{


 
 
 
 
 
 
p
l
a
c
e
d
[
i
d
]
 
=
 
{
 
i
d
,
 
x
:
 
c
o
u
n
t
e
r
+
+
,
 
y
:
 
d
,
 
c
h
a
r
:
 
p
a
r
e
n
t
C
h
a
r
 
}
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}


 
 
 
 
c
o
n
s
t
 
x
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
 
=
 
[
]
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
 
[
c
h
,
 
c
i
d
]
 
o
f
 
e
n
t
r
i
e
s
)
 
{


 
 
 
 
 
 
a
s
s
i
g
n
(
c
i
d
,
 
d
 
+
 
1
,
 
c
h
)
;


 
 
 
 
 
 
x
s
.
p
u
s
h
(
p
l
a
c
e
d
[
c
i
d
]
.
x
)
;


 
 
 
 
}


 
 
 
 
p
l
a
c
e
d
[
i
d
]
 
=
 
{
 
i
d
,
 
x
:
 
(
x
s
[
0
]
 
+
 
x
s
[
x
s
.
l
e
n
g
t
h
 
-
 
1
]
)
 
/
 
2
,
 
y
:
 
d
,
 
c
h
a
r
:
 
p
a
r
e
n
t
C
h
a
r
 
}
;


 
 
}


 
 
a
s
s
i
g
n
(
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
 
t
o
t
a
l
 
=
 
c
o
u
n
t
e
r
;


 
 
c
o
n
s
t
 
x
S
t
e
p
 
=
 
t
o
t
a
l
 
>
 
1
 
?
 
(
w
i
d
t
h
 
-
 
6
0
)
 
/
 
(
t
o
t
a
l
 
-
 
1
)
 
:
 
0
;


 
 
c
o
n
s
t
 
y
S
t
e
p
 
=
 
m
a
x
D
e
p
t
h
 
=
=
=
 
0
 
?
 
0
 
:
 
(
h
e
i
g
h
t
 
-
 
6
0
)
 
/
 
m
a
x
D
e
p
t
h
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
p
l
a
c
e
d
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
p
)
 
=
>
 
{


 
 
 
 
p
.
x
 
=
 
3
0
 
+
 
p
.
x
 
*
 
x
S
t
e
p
;


 
 
 
 
p
.
y
 
=
 
3
0
 
+
 
p
.
y
 
*
 
y
S
t
e
p
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
 
{
 
p
l
a
c
e
d
,
 
m
a
x
D
e
p
t
h
 
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
 
T
r
i
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
2
0
 
}
:
 
{
 
f
r
a
m
e
:
 
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
 
}
)
 
{


 
 
c
o
n
s
t
 
{
 
p
l
a
c
e
d
 
}
 
=
 
l
a
y
o
u
t
T
r
i
e
(
f
r
a
m
e
.
t
r
i
e
,
 
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
 
w
i
d
t
h
,
 
h
e
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
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
:
 
s
t
r
i
n
g
;
 
c
h
a
r
:
 
s
t
r
i
n
g
;
 
k
e
y
:
 
s
t
r
i
n
g
 
}
[
]
 
=
 
[
]
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
f
r
a
m
e
.
t
r
i
e
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


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
[
c
h
,
 
c
i
d
]
 
o
f
 
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
n
.
c
h
i
l
d
r
e
n
)
)
 
{


 
 
 
 
 
 
e
d
g
e
s
.
p
u
s
h
(
{
 
f
r
o
m
:
 
n
.
i
d
,
 
t
o
:
 
c
i
d
,
 
c
h
a
r
:
 
c
h
,
 
k
e
y
:
 
`
$
{
n
.
i
d
}
-
$
{
c
i
d
}
`
 
}
)
;


 
 
 
 
}


 
 
}
)
;


 
 
c
o
n
s
t
 
R
 
=
 
1
8
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
e
d
g
e
s
.
m
a
p
(
(
{
 
f
r
o
m
,
 
t
o
,
 
c
h
a
r
,
 
k
e
y
 
}
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
l
a
c
e
d
[
f
r
o
m
]
,
 
b
 
=
 
p
l
a
c
e
d
[
t
o
]
;


 
 
 
 
 
 
 
 
i
f
 
(
!
a
 
|
|
 
!
b
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
 
f
r
a
m
e
.
e
d
g
e
S
t
a
t
e
s
[
k
e
y
]
 
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
 
s
t
 
?
 
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
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
x
 
=
 
(
a
.
x
 
+
 
b
.
x
)
 
/
 
2
,
 
m
y
 
=
 
(
a
.
y
 
+
 
b
.
y
)
 
/
 
2
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
k
e
y
}
>


 
 
 
 
 
 
 
 
 
 
 
 
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
b
.
x
}
 
y
2
=
{
b
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
s
t
 
?
 
3
 
:
 
1
.
8
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


 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
{
m
x
 
-
 
1
0
}
 
y
=
{
m
y
 
-
 
9
}
 
w
i
d
t
h
=
{
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
1
8
}
 
r
x
=
{
4
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
b
g
}
 
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
1
.
5
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
m
x
}
 
y
=
{
m
y
 
+
 
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
1
1
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
8
0
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
c
o
l
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
c
h
a
r
}


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
{
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
p
l
a
c
e
d
)
.
m
a
p
(
(
p
)
 
=
>
 
{


 
 
 
 
 
 
 
 
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
i
e
[
p
.
i
d
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
 
=
 
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
p
.
i
d
]
 
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
 
s
t
 
?
 
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
 
:
 
(
p
.
i
d
 
=
=
=
 
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
 
?
 
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
 
:
 
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
)
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
 
s
t
 
?
 
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
 
:
 
(
p
.
i
d
 
=
=
=
 
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
 
?
 
"
#
e
7
e
5
e
4
"
 
:
 
"
#
e
c
f
c
c
b
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
g
 
k
e
y
=
{
p
.
i
d
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
p
.
x
}
 
c
y
=
{
p
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
3
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


 
 
 
 
 
 
 
 
 
 
 
 
{
n
.
e
n
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
g
 
t
r
a
n
s
f
o
r
m
=
{
`
t
r
a
n
s
l
a
t
e
(
$
{
p
.
x
 
+
 
R
 
-
 
4
}
,
 
$
{
p
.
y
 
-
 
R
 
-
 
2
}
)
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e
 
r
=
{
7
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
s
u
c
c
e
s
s
}
 
s
t
r
o
k
e
=
"
#
f
f
f
f
f
f
"
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
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
 
y
=
{
3
}
 
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
9
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
9
0
0
}
 
f
i
l
l
=
"
#
f
f
f
f
f
f
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
★


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
}


 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
i
d
 
=
=
=
 
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
p
.
x
}
 
y
=
{
p
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
9
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
o
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
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


 
 
 
 
<
/
s
v
g
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
w
o
r
d
s
I
n
p
u
t
,
 
s
e
t
W
o
r
d
s
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
c
a
t
,
 
c
a
r
,
 
c
a
r
t
,
 
d
o
g
,
 
d
o
,
 
d
o
n
e
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
O
p
>
(
"
s
e
a
r
c
h
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
u
e
r
y
,
 
s
e
t
Q
u
e
r
y
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
c
a
r
t
"
)
;




 
 
c
o
n
s
t
 
w
o
r
d
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
 
w
o
r
d
s
I
n
p
u
t
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
w
)
 
=
>
 
w
.
t
r
i
m
(
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
,


 
 
 
 
[
w
o
r
d
s
I
n
p
u
t
]
,


 
 
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
 
b
u
i
l
d
F
r
a
m
e
s
(
w
o
r
d
s
,
 
o
p
,
 
q
u
e
r
y
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
)
,
 
[
w
o
r
d
s
,
 
o
p
,
 
q
u
e
r
y
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
 
o
p
 
=
=
=
 
"
i
n
s
e
r
t
"
 
?
 
P
S
E
U
D
O
_
I
N
S
E
R
T
 
:
 
o
p
 
=
=
=
 
"
s
e
a
r
c
h
"
 
?
 
P
S
E
U
D
O
_
S
E
A
R
C
H
 
:
 
P
S
E
U
D
O
_
P
R
E
F
I
X
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
T
r
i
e
,
 
$
{
o
p
}
 
"
$
{
q
u
e
r
y
}
"
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
i
t
i
a
l
 
w
o
r
d
s
 
(
c
o
m
m
a
 
s
e
p
a
r
a
t
e
d
)
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
w
o
r
d
s
I
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
 
c
a
t
,
 
c
a
r
,
 
c
a
r
t
"


 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
W
o
r
d
s
 
a
r
e
 
p
r
e
-
i
n
s
e
r
t
e
d
.
 
T
h
e
n
 
t
h
e
 
c
h
o
s
e
n
 
o
p
 
r
u
n
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
C
a
r
/
C
a
t
"
,
 
v
a
l
u
e
:
 
"
c
a
t
,
 
c
a
r
,
 
c
a
r
t
,
 
d
o
g
,
 
d
o
,
 
d
o
n
e
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
T
e
a
m
"
,
 
v
a
l
u
e
:
 
"
t
e
n
,
 
t
e
a
,
 
t
e
a
m
,
 
t
e
e
,
 
t
r
e
e
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
A
p
p
"
,
 
v
a
l
u
e
:
 
"
a
p
p
,
 
a
p
p
l
e
,
 
a
p
p
l
y
,
 
a
p
r
i
l
,
 
a
p
t
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
 
s
e
t
W
o
r
d
s
I
n
p
u
t
(
v
)
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
i
n
s
e
r
t
"
,
 
"
s
e
a
r
c
h
"
,
 
"
p
r
e
f
i
x
"
]
 
a
s
 
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
o
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
 
"
P
r
e
f
i
x
 
s
e
a
r
c
h
"
 
:
 
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
 
{
o
p
 
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
 
"
p
r
e
f
i
x
"
 
:
 
"
w
o
r
d
"
}


 
 
 
 
 
 
 
 
 
 
 
 
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
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
q
u
e
r
y
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
u
e
r
y
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
4
0
 
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
3
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
T
r
i
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
1
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
"
>


 
 
 
 
 
 
 
 
 
 
<
F
l
a
g
 
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
 
h
-
3
 
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
e
n
d
-
o
f
-
w
o
r
d
 
m
a
r
k
e
r
 
(
★
)
 
·
 
e
d
g
e
s
 
l
a
b
e
l
e
d
 
w
i
t
h
 
c
h
a
r
a
c
t
e
r
s
<
/
s
p
a
n
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
 
t
h
e
 
a
l
g
o
r
i
t
h
m
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
E
d
g
e
s
 
c
a
r
r
y
 
c
h
a
r
a
c
t
e
r
s
"
,
 
b
o
d
y
:
 
"
U
n
l
i
k
e
 
B
S
T
s
 
(
v
a
l
u
e
s
 
l
i
v
e
 
i
n
 
n
o
d
e
s
)
,
 
i
n
 
a
 
t
r
i
e
 
t
h
e
 
c
h
a
r
a
c
t
e
r
s
 
l
i
v
e
 
o
n
 
t
h
e
 
e
d
g
e
s
.
 
A
 
p
a
t
h
 
f
r
o
m
 
r
o
o
t
 
s
p
e
l
l
s
 
o
u
t
 
a
 
p
r
e
f
i
x
,
 
a
n
d
 
i
f
 
i
t
 
e
n
d
s
 
a
t
 
a
 
f
l
a
g
g
e
d
 
n
o
d
e
,
 
i
t
 
s
p
e
l
l
s
 
a
 
f
u
l
l
 
w
o
r
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
E
n
d
-
o
f
-
w
o
r
d
 
f
l
a
g
"
,
 
b
o
d
y
:
 
"
A
 
n
o
d
e
 
i
t
s
e
l
f
 
d
o
e
s
 
n
o
t
 
k
n
o
w
 
w
h
e
t
h
e
r
 
i
t
 
t
e
r
m
i
n
a
t
e
s
 
a
 
w
o
r
d
.
 
T
h
e
 
b
o
o
l
e
a
n
 
e
n
d
 
o
n
 
e
a
c
h
 
n
o
d
e
 
m
a
r
k
s
 
t
h
a
t
.
 
T
h
i
s
 
i
s
 
w
h
y
 
d
o
 
a
n
d
 
d
o
n
e
 
c
a
n
 
c
o
e
x
i
s
t
 
o
n
 
t
h
e
 
s
a
m
e
 
b
r
a
n
c
h
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
r
e
f
i
x
 
p
o
w
e
r
"
,
 
b
o
d
y
:
 
"
A
u
t
o
-
c
o
m
p
l
e
t
e
,
 
I
P
-
r
o
u
t
i
n
g
 
t
a
b
l
e
s
,
 
w
o
r
d
 
f
i
l
t
e
r
s
,
 
g
e
n
o
m
e
 
p
r
e
f
i
x
 
s
e
a
r
c
h
,
 
a
l
l
 
b
u
i
l
t
 
o
n
 
t
r
i
e
s
.
 
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
 
f
o
r
 
a
n
y
 
o
p
 
i
s
 
O
(
L
)
 
w
h
e
r
e
 
L
 
i
s
 
t
h
e
 
w
o
r
d
 
l
e
n
g
t
h
,
 
i
n
d
e
p
e
n
d
e
n
t
 
o
f
 
h
o
w
 
m
a
n
y
 
w
o
r
d
s
 
a
r
e
 
s
t
o
r
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
S
p
a
c
e
 
t
r
a
d
e
o
f
f
"
,
 
b
o
d
y
:
 
"
T
r
i
e
s
 
c
a
n
 
u
s
e
 
a
 
l
o
t
 
o
f
 
p
o
i
n
t
e
r
s
 
(
2
6
 
c
h
i
l
d
r
e
n
 
p
e
r
 
n
o
d
e
 
f
o
r
 
l
o
w
e
r
c
a
s
e
 
E
n
g
l
i
s
h
)
.
 
C
o
m
p
r
e
s
s
e
d
 
v
a
r
i
a
n
t
s
 
(
r
a
d
i
x
/
P
a
t
r
i
c
i
a
 
t
r
e
e
s
)
 
m
e
r
g
e
 
c
h
a
i
n
s
 
o
f
 
s
i
n
g
l
e
-
c
h
i
l
d
 
n
o
d
e
s
 
t
o
 
s
a
v
e
 
s
p
a
c
e
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
t
h
e
 
p
r
e
f
i
x
 
t
r
e
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
t
r
i
n
g
s
 
s
t
o
r
e
d
 
b
y
 
s
h
a
r
i
n
g
 
c
o
m
m
o
n
 
p
r
e
f
i
x
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


 
 
 
 
 
 
 
 
 
 
A
 
t
r
i
e
 
s
t
o
r
e
s
 
s
t
r
i
n
g
s
 
b
y
 
s
h
a
r
i
n
g
 
c
o
m
m
o
n
 
p
r
e
f
i
x
e
s
 
i
n
 
t
h
e
 
t
r
e
e
 
s
t
r
u
c
t
u
r
e
.
 
T
w
o
 
w
o
r
d
s
 
t
h
a
t


 
 
 
 
 
 
 
 
 
 
s
h
a
r
e
 
a
 
p
r
e
f
i
x
 
s
h
a
r
e
 
t
h
a
t
 
p
a
t
h
,
 
t
h
e
 
b
r
a
n
c
h
 
d
i
v
e
r
g
e
s
 
e
x
a
c
t
l
y
 
w
h
e
r
e
 
t
h
e
 
w
o
r
d
s
 
d
i
f
f
e
r
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
T
r
i
e
 
s
t
o
r
e
s
 
{
c
a
t
,
 
c
a
r
}
.
 
S
e
a
r
c
h
 
'
c
a
'
,
 
r
e
s
u
l
t
?
"
,
 
a
:
 
"
p
r
e
f
i
x
 
o
n
l
y
"
 
}
,


 
 
 
 
{
 
q
:
 
"
S
t
o
r
e
 
{
d
o
,
 
d
o
n
e
,
 
d
o
t
}
.
 
D
i
s
t
i
n
c
t
 
n
o
d
e
s
 
(
i
n
c
l
.
 
r
o
o
t
)
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
P
r
e
f
i
x
 
'
a
p
'
 
i
n
 
{
a
p
p
,
 
a
p
p
l
e
,
 
a
s
k
,
 
a
p
r
i
l
}
.
 
H
o
w
 
m
a
n
y
 
w
o
r
d
s
?
"
,
 
a
:
 
"
3
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
 
t
o
 
i
n
s
e
r
t
 
a
 
w
o
r
d
 
o
f
 
l
e
n
g
t
h
 
L
 
i
n
t
o
 
a
 
t
r
i
e
?
"
,
 
a
:
 
"
O
(
L
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
 
e
a
c
h
 
t
r
i
e
 
o
n
 
p
a
p
e
r
 
f
i
r
s
t
,
 
t
h
e
 
a
n
s
w
e
r
s
 
p
o
p
 
o
u
t
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
4
0
 
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
W
h
y
 
n
o
t
 
a
 
h
a
s
h
-
s
e
t
 
o
f
 
s
t
r
i
n
g
s
?
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


 
 
 
 
 
 
 
 
 
 
H
a
s
h
i
n
g
 
c
h
e
c
k
s
 
e
x
a
c
t
 
m
e
m
b
e
r
s
h
i
p
 
i
n
 
O
(
L
)
 
a
v
e
r
a
g
e
,
 
b
u
t
 
f
a
i
l
s
 
a
t
 
p
r
e
f
i
x
 
q
u
e
r
i
e
s
,
 
o
r
d
e
r
e
d


 
 
 
 
 
 
 
 
 
 
i
t
e
r
a
t
i
o
n
,
 
a
n
d
 
a
u
t
o
-
c
o
m
p
l
e
t
e
.
 
T
r
i
e
s
 
g
i
v
e
 
y
o
u
 
a
l
l
 
t
h
r
e
e
 
f
o
r
 
t
h
e
 
s
a
m
e
 
O
(
L
)
 
c
o
s
t
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
S
p
a
c
e
 
e
n
g
i
n
e
e
r
i
n
g
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


 
 
 
 
 
 
 
 
 
 
A
 
n
a
i
v
e
 
t
r
i
e
 
s
t
o
r
e
s
 
a
n
 
a
r
r
a
y
 
o
f
 
2
6
 
p
o
i
n
t
e
r
s
 
p
e
r
 
n
o
d
e
,
 
m
o
s
t
 
a
r
e
 
n
u
l
l
.
 
O
p
t
i
o
n
s
:
 
u
s
e
 
a
 
h
a
s
h


 
 
 
 
 
 
 
 
 
 
m
a
p
 
p
e
r
 
n
o
d
e
 
(
s
a
v
e
s
 
m
e
m
o
r
y
,
 
s
l
o
w
e
r
 
c
o
n
s
t
a
n
t
)
,
 
o
r
 
s
w
i
t
c
h
 
t
o
 
a
 
r
a
d
i
x
 
t
r
e
e
 
t
h
a
t
 
c
o
l
l
a
p
s
e
s


 
 
 
 
 
 
 
 
 
 
s
i
n
g
l
e
-
c
h
i
l
d
 
c
h
a
i
n
s
 
i
n
t
o
 
e
d
g
e
s
 
l
a
b
e
l
e
d
 
w
i
t
h
 
s
t
r
i
n
g
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
W
h
e
r
e
 
y
o
u
 
w
i
l
l
 
m
e
e
t
 
t
h
e
m
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


 
 
 
 
 
 
 
 
 
 
A
u
t
o
-
c
o
m
p
l
e
t
e
 
i
n
 
s
e
a
r
c
h
 
b
o
x
e
s
,
 
I
D
E
 
s
y
m
b
o
l
 
l
o
o
k
u
p
,
 
I
P
 
r
o
u
t
i
n
g
 
(
l
o
n
g
e
s
t
-
p
r
e
f
i
x
 
m
a
t
c
h
)
,


 
 
 
 
 
 
 
 
 
 
A
h
o
-
C
o
r
a
s
i
c
k
 
m
u
l
t
i
-
p
a
t
t
e
r
n
 
m
a
t
c
h
i
n
g
,
 
a
n
d
 
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
 
(
w
o
r
d
-
s
q
u
a
r
e
 
p
r
o
b
l
e
m
s
)
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
T
r
i
e
 
n
o
d
e
 
i
m
p
l
e
m
e
n
t
a
t
i
o
n
 
c
h
o
i
c
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
u
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
 
l
i
s
t
-
d
i
s
c
 
p
l
-
5
 
s
p
a
c
e
-
y
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
 
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
"
>
A
r
r
a
y
 
o
f
 
2
6
:
<
/
s
t
r
o
n
g
>
 
O
(
1
)
 
c
h
i
l
d


 
 
 
 
 
 
 
 
 
 
 
 
l
o
o
k
u
p
,
 
O
(
2
6
·
n
)
 
s
p
a
c
e
.
 
F
i
n
e
 
f
o
r
 
l
o
w
e
r
c
a
s
e
 
E
n
g
l
i
s
h
.


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
 
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
"
>
H
a
s
h
M
a
p
 
p
e
r
 
n
o
d
e
:
<
/
s
t
r
o
n
g
>
 
O
(
1
)


 
 
 
 
 
 
 
 
 
 
 
 
a
v
e
r
a
g
e
,
 
s
p
a
c
e
 
p
r
o
p
o
r
t
i
o
n
a
l
 
t
o
 
a
c
t
u
a
l
 
c
h
i
l
d
r
e
n
.
 
B
e
t
t
e
r
 
f
o
r
 
l
a
r
g
e
 
a
l
p
h
a
b
e
t
s
 
(
U
n
i
c
o
d
e
)
.


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
 
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
"
>
S
o
r
t
e
d
 
a
r
r
a
y
 
+
 
b
i
n
a
r
y
 
s
e
a
r
c
h
:
<
/
s
t
r
o
n
g
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
O
(
l
o
g
 
2
6
)
 
l
o
o
k
u
p
,
 
m
i
n
i
m
a
l
 
s
p
a
c
e
.
 
U
s
e
d
 
i
n
 
e
m
b
e
d
d
e
d
/
f
i
r
m
w
a
r
e
 
c
o
n
t
e
x
t
s
.


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
u
l
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
 
m
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
L
e
e
t
C
o
d
e
 
t
r
i
e
 
p
r
o
b
l
e
m
s
 
t
y
p
i
c
a
l
l
y
 
a
s
k
 
f
o
r
 
t
h
e
 
a
r
r
a
y
-
o
f
-
2
6
 
a
p
p
r
o
a
c
h
.
 
U
s
e
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
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
c
h
i
l
d
r
e
n
 
=
 
[
N
o
n
e
]
 
*
 
2
6
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
 
o
r
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
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
c
h
i
l
d
r
e
n
:
 
T
r
i
e
N
o
d
e
[
2
6
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
T
r
i
e
s
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
 
t
o
 
i
n
s
e
r
t
 
a
 
w
o
r
d
 
o
f
 
l
e
n
g
t
h
 
L
 
i
n
t
o
 
a
 
t
r
i
e
 
w
i
t
h
 
N
 
w
o
r
d
s
 
(
w
o
r
s
t
 
c
a
s
e
)
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
L
)
"
,
 
"
O
(
N
)
"
,
 
"
O
(
N
 
+
 
L
)
"
,
 
"
O
(
L
 
·
 
l
o
g
 
N
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
 
0
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
 
c
h
a
r
a
c
t
e
r
 
d
e
s
c
e
n
d
s
 
o
n
e
 
l
e
v
e
l
,
 
i
n
d
e
p
e
n
d
e
n
t
 
o
f
 
h
o
w
 
m
a
n
y
 
o
t
h
e
r
 
w
o
r
d
s
 
a
r
e
 
a
l
r
e
a
d
y
 
s
t
o
r
e
d
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
y
 
d
o
e
s
 
e
a
c
h
 
t
r
i
e
 
n
o
d
e
 
n
e
e
d
 
a
n
 
e
x
p
l
i
c
i
t
 
e
n
d
-
o
f
-
w
o
r
d
 
f
l
a
g
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
T
o
 
d
i
s
t
i
n
g
u
i
s
h
 
u
p
p
e
r
c
a
s
e
 
f
r
o
m
 
l
o
w
e
r
c
a
s
e
"
,


 
 
 
 
 
 
 
 
"
B
e
c
a
u
s
e
 
p
r
e
f
i
x
e
s
 
o
f
 
w
o
r
d
s
 
m
a
y
 
n
o
t
 
b
e
 
w
o
r
d
s
 
(
e
.
g
.
 
'
d
o
'
 
v
s
 
'
d
o
n
e
'
)
"
,


 
 
 
 
 
 
 
 
"
T
o
 
s
a
v
e
 
m
e
m
o
r
y
"
,


 
 
 
 
 
 
 
 
"
T
o
 
h
a
n
d
l
e
 
d
u
p
l
i
c
a
t
e
s
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
W
i
t
h
o
u
t
 
t
h
e
 
f
l
a
g
,
 
y
o
u
 
c
o
u
l
d
n
'
t
 
t
e
l
l
 
a
 
t
r
u
e
 
w
o
r
d
 
f
r
o
m
 
a
 
p
r
e
f
i
x
 
t
h
a
t
 
m
e
r
e
l
y
 
l
e
a
d
s
 
t
o
 
l
o
n
g
e
r
 
w
o
r
d
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
B
e
s
t
 
u
s
e
 
c
a
s
e
 
f
o
r
 
a
 
t
r
i
e
 
o
v
e
r
 
a
 
h
a
s
h
-
s
e
t
 
o
f
 
s
t
r
i
n
g
s
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
E
x
a
c
t
 
m
e
m
b
e
r
s
h
i
p
 
q
u
e
r
i
e
s
"
,
 
"
P
r
e
f
i
x
 
a
n
d
 
a
u
t
o
-
c
o
m
p
l
e
t
e
 
q
u
e
r
i
e
s
"
,
 
"
S
o
r
t
i
n
g
 
w
o
r
d
s
"
,
 
"
C
o
u
n
t
i
n
g
 
d
u
p
l
i
c
a
t
e
s
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
T
r
i
e
s
 
g
i
v
e
 
p
r
e
f
i
x
 
q
u
e
r
i
e
s
 
a
n
d
 
a
u
t
o
-
c
o
m
p
l
e
t
e
 
f
o
r
 
f
r
e
e
,
 
h
a
s
h
-
s
e
t
s
 
c
a
n
n
o
t
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
 
t
r
i
e
 
o
v
e
r
 
l
o
w
e
r
c
a
s
e
 
E
n
g
l
i
s
h
,
 
h
o
w
 
m
a
n
y
 
c
h
i
l
d
r
e
n
 
d
o
e
s
 
e
a
c
h
 
n
o
d
e
 
h
a
v
e
 
(
a
r
r
a
y
 
r
e
p
r
e
s
e
n
t
a
t
i
o
n
)
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
2
"
,
 
"
1
0
"
,
 
"
2
6
"
,
 
"
2
5
6
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
O
n
e
 
s
l
o
t
 
p
e
r
 
l
e
t
t
e
r
 
a
-
z
.
 
R
a
d
i
x
 
t
r
e
e
s
 
c
o
m
p
r
e
s
s
 
t
h
i
s
;
 
h
a
s
h
-
m
a
p
 
n
o
d
e
s
 
t
r
a
d
e
 
s
p
a
c
e
 
f
o
r
 
s
p
e
e
d
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
T
r
i
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
6
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
A
u
t
o
-
c
o
m
p
l
e
t
e
,
 
r
o
u
t
i
n
g
 
t
a
b
l
e
s
,
 
m
u
l
t
i
-
p
a
t
t
e
r
n
 
m
a
t
c
h
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


