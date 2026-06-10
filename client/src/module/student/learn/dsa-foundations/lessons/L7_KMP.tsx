
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


 
 
C
a
r
d
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
t
r
i
n
g
-
m
a
t
c
h
i
n
g
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
 
c
e
l
l
 
s
t
a
t
e
 
t
y
p
e
s
 
/
 
r
e
n
d
e
r
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
a
c
t
i
v
e
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
d
o
n
e
"
 
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




f
u
n
c
t
i
o
n
 
M
e
m
o
r
y
C
e
l
l
s
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


 
 
p
o
i
n
t
e
r
s
,


 
 
c
e
l
l
W
i
d
t
h
 
=
 
3
6
,


 
 
l
a
b
e
l
s
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
m
b
e
r
)
[
]
;


 
 
s
t
a
t
e
s
?
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


 
 
p
o
i
n
t
e
r
s
?
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
;


 
 
c
e
l
l
W
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


 
 
l
a
b
e
l
s
?
:
 
s
t
r
i
n
g
[
]
;


}
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
r
e
l
a
t
i
v
e
"
>


 
 
 
 
 
 
{
p
o
i
n
t
e
r
s
 
&
&
 
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
p
o
i
n
t
e
r
s
)
.
m
a
p
(
(
[
n
a
m
e
,
 
i
d
x
]
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
n
a
m
e
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
a
b
s
o
l
u
t
e
 
-
t
o
p
-
5
 
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
t
o
n
e
-
5
0
0
 
t
e
x
t
-
c
e
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
l
e
f
t
:
 
i
d
x
 
*
 
(
c
e
l
l
W
i
d
t
h
 
+
 
2
)
 
+
 
c
e
l
l
W
i
d
t
h
 
/
 
2
 
-
 
8
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
n
a
m
e
}


 
 
 
 
 
 
 
 
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
0
.
5
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
?
.
[
i
]
;


 
 
 
 
 
 
 
 
 
 
l
e
t
 
b
g
:
 
s
t
r
i
n
g
 
=
 
T
H
E
M
E
.
b
g
;


 
 
 
 
 
 
 
 
 
 
l
e
t
 
b
o
r
d
e
r
:
 
s
t
r
i
n
g
 
=
 
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


 
 
 
 
 
 
 
 
 
 
l
e
t
 
t
e
x
t
C
o
l
o
r
:
 
s
t
r
i
n
g
 
=
 
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
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
s
t
 
=
=
=
 
"
a
c
t
i
v
e
"
)
 
{
 
b
g
 
=
 
"
r
g
b
a
(
5
9
,
1
3
0
,
2
4
6
,
0
.
1
2
)
"
;
 
b
o
r
d
e
r
 
=
 
"
#
3
b
8
2
f
6
"
;
 
t
e
x
t
C
o
l
o
r
 
=
 
"
#
1
d
4
e
d
8
"
;
 
}


 
 
 
 
 
 
 
 
 
 
e
l
s
e
 
i
f
 
(
s
t
 
=
=
=
 
"
m
a
t
c
h
"
)
 
{
 
b
g
 
=
 
`
$
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
1
4
`
;
 
b
o
r
d
e
r
 
=
 
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
;
 
t
e
x
t
C
o
l
o
r
 
=
 
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
D
a
r
k
;
 
}


 
 
 
 
 
 
 
 
 
 
e
l
s
e
 
i
f
 
(
s
t
 
=
=
=
 
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
)
 
{
 
b
g
 
=
 
`
$
{
T
H
E
M
E
.
d
a
n
g
e
r
}
1
4
`
;
 
b
o
r
d
e
r
 
=
 
T
H
E
M
E
.
d
a
n
g
e
r
;
 
t
e
x
t
C
o
l
o
r
 
=
 
T
H
E
M
E
.
d
a
n
g
e
r
D
a
r
k
;
 
}


 
 
 
 
 
 
 
 
 
 
e
l
s
e
 
i
f
 
(
s
t
 
=
=
=
 
"
d
o
n
e
"
)
 
{
 
b
g
 
=
 
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
S
o
f
t
;
 
b
o
r
d
e
r
 
=
 
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
D
a
r
k
;
 
t
e
x
t
C
o
l
o
r
 
=
 
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
D
a
r
k
;
 
}


 
 
 
 
 
 
 
 
 
 
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
x
s
 
r
o
u
n
d
e
d
 
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
a
l
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
c
e
l
l
W
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
:
 
c
e
l
l
W
i
d
t
h
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
.
5
p
x
 
s
o
l
i
d
 
$
{
b
o
r
d
e
r
}
`
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
 
b
g
,
 
c
o
l
o
r
:
 
t
e
x
t
C
o
l
o
r
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
a
b
e
l
s
 
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
 
m
t
-
0
.
5
"
>
{
l
a
b
e
l
s
[
i
]
}
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
r
a
m
e
 
t
y
p
e
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


 
 
p
h
a
s
e
:
 
"
l
p
s
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
;


 
 
l
p
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


 
 
l
p
s
I
?
:
 
n
u
m
b
e
r
;


 
 
l
p
s
L
e
n
?
:
 
n
u
m
b
e
r
;


 
 
p
a
t
t
e
r
n
S
h
i
f
t
:
 
n
u
m
b
e
r
;


 
 
i
I
n
T
e
x
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


 
 
j
I
n
P
a
t
t
e
r
n
?
:
 
n
u
m
b
e
r
;


 
 
m
a
t
c
h
e
d
?
:
 
b
o
o
l
e
a
n
;


 
 
m
i
s
m
a
t
c
h
?
:
 
b
o
o
l
e
a
n
;


 
 
f
o
u
n
d
?
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


 
 
c
o
m
p
a
r
i
s
o
n
s
:
 
n
u
m
b
e
r
;


 
 
b
r
u
t
e
C
o
m
p
a
r
i
s
o
n
s
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
K
e
y
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
 
=
 
[


 
 
"
#
 
P
h
a
s
e
 
1
 
-
 
b
u
i
l
d
 
L
P
S
 
(
l
o
n
g
e
s
t
 
p
r
o
p
e
r
 
p
r
e
f
i
x
 
=
 
s
u
f
f
i
x
)
"
,


 
 
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
L
P
S
(
p
)
:
"
,


 
 
"
 
 
l
p
s
[
0
]
 
<
-
 
0
;
 
l
e
n
 
<
-
 
0
;
 
i
 
<
-
 
1
"
,


 
 
"
 
 
w
h
i
l
e
 
i
 
<
 
|
p
|
:
"
,


 
 
"
 
 
 
 
i
f
 
p
[
i
]
 
=
 
p
[
l
e
n
]
:
 
l
e
n
+
+
;
 
l
p
s
[
i
]
 
=
 
l
e
n
;
 
i
+
+
"
,


 
 
"
 
 
 
 
e
l
s
e
 
i
f
 
l
e
n
 
>
 
0
:
 
l
e
n
 
<
-
 
l
p
s
[
l
e
n
-
1
]
"
,


 
 
"
 
 
 
 
e
l
s
e
:
 
l
p
s
[
i
]
 
=
 
0
;
 
i
+
+
"
,


 
 
"
"
,


 
 
"
#
 
P
h
a
s
e
 
2
 
-
 
s
e
a
r
c
h
"
,


 
 
"
f
u
n
c
t
i
o
n
 
K
M
P
(
t
,
 
p
,
 
l
p
s
)
:
"
,


 
 
"
 
 
i
 
<
-
 
0
;
 
j
 
<
-
 
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
 
<
 
|
t
|
:
"
,


 
 
"
 
 
 
 
i
f
 
t
[
i
]
 
=
 
p
[
j
]
:
 
i
+
+
;
 
j
+
+
"
,


 
 
"
 
 
 
 
i
f
 
j
 
=
 
|
p
|
:
 
r
e
p
o
r
t
 
m
a
t
c
h
 
a
t
 
i
-
j
;
 
j
 
<
-
 
l
p
s
[
j
-
1
]
"
,


 
 
"
 
 
 
 
e
l
s
e
 
i
f
 
i
 
<
 
|
t
|
 
a
n
d
 
t
[
i
]
 
!
=
 
p
[
j
]
:
"
,


 
 
"
 
 
 
 
 
 
i
f
 
j
 
>
 
0
:
 
j
 
<
-
 
l
p
s
[
j
-
1
]
 
 
 
#
 
s
k
i
p
 
u
s
i
n
g
 
L
P
S
"
,


 
 
"
 
 
 
 
 
 
e
l
s
e
:
 
i
+
+
"
,


]
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
 
 
F
r
a
m
e
 
b
u
i
l
d
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
F
r
a
m
e
s
(
t
e
x
t
:
 
s
t
r
i
n
g
,
 
p
a
t
t
e
r
n
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


 
 
c
o
n
s
t
 
m
 
=
 
p
a
t
t
e
r
n
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
 
n
 
=
 
t
e
x
t
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
 
l
p
s
 
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
m
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
 
v
a
r
s
:
 
{
 
p
a
t
t
e
r
n
,
 
m
,
 
l
e
n
:
 
0
,
 
i
:
 
1
 
}
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
d
 
L
P
S
 
f
o
r
 
p
a
t
t
e
r
n
 
"
$
{
p
a
t
t
e
r
n
}
"
.
 
l
p
s
[
0
]
 
=
 
0
 
a
l
w
a
y
s
.
`
,
 
p
h
a
s
e
:
 
"
l
p
s
"
,
 
l
p
s
:
 
l
p
s
.
s
l
i
c
e
(
)
,
 
l
p
s
I
:
 
0
,
 
l
p
s
L
e
n
:
 
0
,
 
p
a
t
t
e
r
n
S
h
i
f
t
:
 
0
,
 
c
o
m
p
a
r
i
s
o
n
s
:
 
0
,
 
b
r
u
t
e
C
o
m
p
a
r
i
s
o
n
s
:
 
0
 
}
)
;




 
 
l
e
t
 
l
e
n
 
=
 
0
,
 
i
 
=
 
1
;


 
 
w
h
i
l
e
 
(
i
 
<
 
m
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
 
4
,
 
v
a
r
s
:
 
{
 
i
,
 
l
e
n
,
 
"
p
[
i
]
"
:
 
p
a
t
t
e
r
n
[
i
]
,
 
"
p
[
l
e
n
]
"
:
 
p
a
t
t
e
r
n
[
l
e
n
]
 
}
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
p
a
r
e
 
p
[
$
{
i
}
]
=
'
$
{
p
a
t
t
e
r
n
[
i
]
}
'
 
w
i
t
h
 
p
[
$
{
l
e
n
}
]
=
'
$
{
p
a
t
t
e
r
n
[
l
e
n
]
}
'
.
`
,
 
p
h
a
s
e
:
 
"
l
p
s
"
,
 
l
p
s
:
 
l
p
s
.
s
l
i
c
e
(
)
,
 
l
p
s
I
:
 
i
,
 
l
p
s
L
e
n
:
 
l
e
n
,
 
p
a
t
t
e
r
n
S
h
i
f
t
:
 
0
,
 
c
o
m
p
a
r
i
s
o
n
s
:
 
0
,
 
b
r
u
t
e
C
o
m
p
a
r
i
s
o
n
s
:
 
0
 
}
)
;


 
 
 
 
i
f
 
(
p
a
t
t
e
r
n
[
i
]
 
=
=
=
 
p
a
t
t
e
r
n
[
l
e
n
]
)
 
{


 
 
 
 
 
 
l
e
n
+
+
;
 
l
p
s
[
i
]
 
=
 
l
e
n
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
 
v
a
r
s
:
 
{
 
i
,
 
l
e
n
,
 
[
`
l
p
s
[
$
{
i
}
]
`
]
:
 
l
e
n
 
}
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
t
c
h
!
 
E
x
t
e
n
d
:
 
l
p
s
[
$
{
i
}
]
 
=
 
$
{
l
e
n
}
.
`
,
 
p
h
a
s
e
:
 
"
l
p
s
"
,
 
l
p
s
:
 
l
p
s
.
s
l
i
c
e
(
)
,
 
l
p
s
I
:
 
i
,
 
l
p
s
L
e
n
:
 
l
e
n
 
-
 
1
,
 
p
a
t
t
e
r
n
S
h
i
f
t
:
 
0
,
 
c
o
m
p
a
r
i
s
o
n
s
:
 
0
,
 
b
r
u
t
e
C
o
m
p
a
r
i
s
o
n
s
:
 
0
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
K
e
y
:
 
`
l
p
s
[
$
{
i
}
]
`
 
}
)
;


 
 
 
 
 
 
i
+
+
;


 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
l
e
n
 
>
 
0
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
n
e
w
L
e
n
 
=
 
l
p
s
[
l
e
n
 
-
 
1
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
 
5
,
 
v
a
r
s
:
 
{
 
i
,
 
l
e
n
,
 
n
e
w
L
e
n
 
}
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
i
s
m
a
t
c
h
 
-
 
f
a
l
l
 
b
a
c
k
:
 
l
e
n
 
<
-
 
l
p
s
[
$
{
l
e
n
 
-
 
1
}
]
 
=
 
$
{
n
e
w
L
e
n
}
.
`
,
 
p
h
a
s
e
:
 
"
l
p
s
"
,
 
l
p
s
:
 
l
p
s
.
s
l
i
c
e
(
)
,
 
l
p
s
I
:
 
i
,
 
l
p
s
L
e
n
:
 
l
e
n
,
 
p
a
t
t
e
r
n
S
h
i
f
t
:
 
0
,
 
c
o
m
p
a
r
i
s
o
n
s
:
 
0
,
 
b
r
u
t
e
C
o
m
p
a
r
i
s
o
n
s
:
 
0
 
}
)
;


 
 
 
 
 
 
l
e
n
 
=
 
n
e
w
L
e
n
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
l
p
s
[
i
]
 
=
 
0
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
 
6
,
 
v
a
r
s
:
 
{
 
i
,
 
l
e
n
,
 
[
`
l
p
s
[
$
{
i
}
]
`
]
:
 
0
 
}
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
 
m
a
t
c
h
 
a
n
d
 
l
e
n
=
0
 
-
>
 
l
p
s
[
$
{
i
}
]
 
=
 
0
.
`
,
 
p
h
a
s
e
:
 
"
l
p
s
"
,
 
l
p
s
:
 
l
p
s
.
s
l
i
c
e
(
)
,
 
l
p
s
I
:
 
i
,
 
l
p
s
L
e
n
:
 
0
,
 
p
a
t
t
e
r
n
S
h
i
f
t
:
 
0
,
 
c
o
m
p
a
r
i
s
o
n
s
:
 
0
,
 
b
r
u
t
e
C
o
m
p
a
r
i
s
o
n
s
:
 
0
 
}
)
;


 
 
 
 
 
 
i
+
+
;


 
 
 
 
}


 
 
}




 
 
c
o
n
s
t
 
f
o
u
n
d
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


 
 
l
e
t
 
t
i
 
=
 
0
,
 
p
j
 
=
 
0
,
 
c
m
p
 
=
 
0
;


 
 
l
e
t
 
b
r
u
t
e
 
=
 
0
;


 
 
f
o
r
 
(
l
e
t
 
s
 
=
 
0
;
 
s
 
<
=
 
n
 
-
 
m
;
 
s
+
+
)
 
{


 
 
 
 
f
o
r
 
(
l
e
t
 
k
 
=
 
0
;
 
k
 
<
 
m
;
 
k
+
+
)
 
{
 
b
r
u
t
e
+
+
;
 
i
f
 
(
t
e
x
t
[
s
 
+
 
k
]
 
!
=
=
 
p
a
t
t
e
r
n
[
k
]
)
 
b
r
e
a
k
;
 
}


 
 
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
1
,
 
v
a
r
s
:
 
{
 
i
:
 
0
,
 
j
:
 
0
 
}
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
h
a
s
e
 
2
 
-
 
s
e
a
r
c
h
.
 
i
=
0
,
 
j
=
0
.
`
,
 
p
h
a
s
e
:
 
"
s
e
a
r
c
h
"
,
 
l
p
s
:
 
l
p
s
.
s
l
i
c
e
(
)
,
 
p
a
t
t
e
r
n
S
h
i
f
t
:
 
0
,
 
i
I
n
T
e
x
t
:
 
0
,
 
j
I
n
P
a
t
t
e
r
n
:
 
0
,
 
f
o
u
n
d
:
 
[
]
,
 
c
o
m
p
a
r
i
s
o
n
s
:
 
0
,
 
b
r
u
t
e
C
o
m
p
a
r
i
s
o
n
s
:
 
b
r
u
t
e
 
}
)
;




 
 
w
h
i
l
e
 
(
t
i
 
<
 
n
)
 
{


 
 
 
 
c
m
p
+
+
;


 
 
 
 
c
o
n
s
t
 
i
s
M
a
t
c
h
 
=
 
t
e
x
t
[
t
i
]
 
=
=
=
 
p
a
t
t
e
r
n
[
p
j
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
2
,
 
v
a
r
s
:
 
{
 
i
:
 
t
i
,
 
j
:
 
p
j
,
 
"
t
[
i
]
"
:
 
t
e
x
t
[
t
i
]
,
 
"
p
[
j
]
"
:
 
p
a
t
t
e
r
n
[
p
j
]
,
 
c
o
m
p
a
r
i
s
o
n
s
:
 
c
m
p
 
}
,
 
m
e
s
s
a
g
e
:
 
i
s
M
a
t
c
h
 
?
 
`
t
[
$
{
t
i
}
]
=
'
$
{
t
e
x
t
[
t
i
]
}
'
 
=
 
p
[
$
{
p
j
}
]
=
'
$
{
p
a
t
t
e
r
n
[
p
j
]
}
'
 
-
 
a
d
v
a
n
c
e
 
b
o
t
h
.
`
 
:
 
`
t
[
$
{
t
i
}
]
=
'
$
{
t
e
x
t
[
t
i
]
}
'
 
!
=
 
p
[
$
{
p
j
}
]
=
'
$
{
p
a
t
t
e
r
n
[
p
j
]
}
'
 
-
 
m
i
s
m
a
t
c
h
.
`
,
 
p
h
a
s
e
:
 
"
s
e
a
r
c
h
"
,
 
l
p
s
:
 
l
p
s
.
s
l
i
c
e
(
)
,
 
p
a
t
t
e
r
n
S
h
i
f
t
:
 
t
i
 
-
 
p
j
,
 
i
I
n
T
e
x
t
:
 
t
i
,
 
j
I
n
P
a
t
t
e
r
n
:
 
p
j
,
 
m
a
t
c
h
e
d
:
 
i
s
M
a
t
c
h
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
 
!
i
s
M
a
t
c
h
,
 
f
o
u
n
d
:
 
[
.
.
.
f
o
u
n
d
]
,
 
c
o
m
p
a
r
i
s
o
n
s
:
 
c
m
p
,
 
b
r
u
t
e
C
o
m
p
a
r
i
s
o
n
s
:
 
b
r
u
t
e
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
K
e
y
:
 
"
c
o
m
p
a
r
i
s
o
n
s
"
 
}
)
;


 
 
 
 
i
f
 
(
i
s
M
a
t
c
h
)
 
{


 
 
 
 
 
 
t
i
+
+
;
 
p
j
+
+
;


 
 
 
 
 
 
i
f
 
(
p
j
 
=
=
=
 
m
)
 
{


 
 
 
 
 
 
 
 
f
o
u
n
d
.
p
u
s
h
(
t
i
 
-
 
p
j
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
J
 
=
 
l
p
s
[
p
j
 
-
 
1
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
3
,
 
v
a
r
s
:
 
{
 
m
a
t
c
h
:
 
t
i
 
-
 
p
j
,
 
c
o
m
p
a
r
i
s
o
n
s
:
 
c
m
p
 
}
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
u
l
l
 
m
a
t
c
h
 
a
t
 
i
n
d
e
x
 
$
{
t
i
 
-
 
p
j
}
!
 
S
l
i
d
e
 
u
s
i
n
g
 
l
p
s
[
$
{
p
j
 
-
 
1
}
]
 
=
 
$
{
n
e
w
J
}
.
`
,
 
p
h
a
s
e
:
 
"
s
e
a
r
c
h
"
,
 
l
p
s
:
 
l
p
s
.
s
l
i
c
e
(
)
,
 
p
a
t
t
e
r
n
S
h
i
f
t
:
 
t
i
 
-
 
n
e
w
J
,
 
i
I
n
T
e
x
t
:
 
t
i
,
 
j
I
n
P
a
t
t
e
r
n
:
 
n
e
w
J
,
 
m
a
t
c
h
e
d
:
 
t
r
u
e
,
 
f
o
u
n
d
:
 
[
.
.
.
f
o
u
n
d
]
,
 
c
o
m
p
a
r
i
s
o
n
s
:
 
c
m
p
,
 
b
r
u
t
e
C
o
m
p
a
r
i
s
o
n
s
:
 
b
r
u
t
e
 
}
)
;


 
 
 
 
 
 
 
 
p
j
 
=
 
n
e
w
J
;


 
 
 
 
 
 
}


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
i
f
 
(
p
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
 
n
e
w
J
 
=
 
l
p
s
[
p
j
 
-
 
1
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
5
,
 
v
a
r
s
:
 
{
 
i
:
 
t
i
,
 
"
l
p
s
[
j
-
1
]
"
:
 
n
e
w
J
,
 
"
n
e
w
 
j
"
:
 
n
e
w
J
,
 
c
o
m
p
a
r
i
s
o
n
s
:
 
c
m
p
 
}
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
k
i
p
 
u
s
i
n
g
 
L
P
S
:
 
j
 
<
-
 
l
p
s
[
$
{
p
j
 
-
 
1
}
]
 
=
 
$
{
n
e
w
J
}
.
 
P
a
t
t
e
r
n
 
j
u
m
p
s
 
t
o
 
a
l
i
g
n
.
`
,
 
p
h
a
s
e
:
 
"
s
e
a
r
c
h
"
,
 
l
p
s
:
 
l
p
s
.
s
l
i
c
e
(
)
,
 
p
a
t
t
e
r
n
S
h
i
f
t
:
 
t
i
 
-
 
n
e
w
J
,
 
i
I
n
T
e
x
t
:
 
t
i
,
 
j
I
n
P
a
t
t
e
r
n
:
 
n
e
w
J
,
 
f
o
u
n
d
:
 
[
.
.
.
f
o
u
n
d
]
,
 
c
o
m
p
a
r
i
s
o
n
s
:
 
c
m
p
,
 
b
r
u
t
e
C
o
m
p
a
r
i
s
o
n
s
:
 
b
r
u
t
e
 
}
)
;


 
 
 
 
 
 
 
 
p
j
 
=
 
n
e
w
J
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
t
i
+
+
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
6
,
 
v
a
r
s
:
 
{
 
i
:
 
t
i
,
 
j
:
 
0
,
 
c
o
m
p
a
r
i
s
o
n
s
:
 
c
m
p
 
}
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
j
 
=
 
0
 
-
 
s
l
i
d
e
 
p
a
t
t
e
r
n
 
b
y
 
1
 
(
a
d
v
a
n
c
e
 
i
)
.
`
,
 
p
h
a
s
e
:
 
"
s
e
a
r
c
h
"
,
 
l
p
s
:
 
l
p
s
.
s
l
i
c
e
(
)
,
 
p
a
t
t
e
r
n
S
h
i
f
t
:
 
t
i
,
 
i
I
n
T
e
x
t
:
 
t
i
,
 
j
I
n
P
a
t
t
e
r
n
:
 
0
,
 
f
o
u
n
d
:
 
[
.
.
.
f
o
u
n
d
]
,
 
c
o
m
p
a
r
i
s
o
n
s
:
 
c
m
p
,
 
b
r
u
t
e
C
o
m
p
a
r
i
s
o
n
s
:
 
b
r
u
t
e
 
}
)
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
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
1
,
 
v
a
r
s
:
 
{
 
m
a
t
c
h
e
s
:
 
f
o
u
n
d
.
l
e
n
g
t
h
,
 
c
o
m
p
a
r
i
s
o
n
s
:
 
c
m
p
,
 
b
r
u
t
e
 
}
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
D
o
n
e
.
 
M
a
t
c
h
e
s
 
a
t
:
 
[
$
{
f
o
u
n
d
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
-
"
}
]
.
 
K
M
P
 
u
s
e
d
 
$
{
c
m
p
}
 
c
o
m
p
a
r
i
s
o
n
s
 
v
s
 
b
r
u
t
e
 
f
o
r
c
e
'
s
 
~
$
{
b
r
u
t
e
}
.
`
,
 
p
h
a
s
e
:
 
"
s
e
a
r
c
h
"
,
 
l
p
s
:
 
l
p
s
.
s
l
i
c
e
(
)
,
 
p
a
t
t
e
r
n
S
h
i
f
t
:
 
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
 
n
 
-
 
m
)
,
 
i
I
n
T
e
x
t
:
 
n
,
 
j
I
n
P
a
t
t
e
r
n
:
 
p
j
,
 
f
o
u
n
d
:
 
[
.
.
.
f
o
u
n
d
]
,
 
c
o
m
p
a
r
i
s
o
n
s
:
 
c
m
p
,
 
b
r
u
t
e
C
o
m
p
a
r
i
s
o
n
s
:
 
b
r
u
t
e
 
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
a
t
i
o
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
K
M
P
V
i
s
u
a
l
i
z
a
t
i
o
n
(
{
 
f
r
a
m
e
,
 
t
e
x
t
,
 
p
a
t
t
e
r
n
 
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
 
t
e
x
t
:
 
s
t
r
i
n
g
;
 
p
a
t
t
e
r
n
:
 
s
t
r
i
n
g
 
}
)
 
{


 
 
c
o
n
s
t
 
n
 
=
 
t
e
x
t
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
 
m
 
=
 
p
a
t
t
e
r
n
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
 
s
h
i
f
t
 
=
 
f
r
a
m
e
.
p
a
t
t
e
r
n
S
h
i
f
t
;




 
 
c
o
n
s
t
 
t
e
x
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
n
)
.
f
i
l
l
(
u
n
d
e
f
i
n
e
d
)
;


 
 
c
o
n
s
t
 
p
a
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
m
)
.
f
i
l
l
(
u
n
d
e
f
i
n
e
d
)
;




 
 
i
f
 
(
f
r
a
m
e
.
p
h
a
s
e
 
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
 
{


 
 
 
 
f
o
r
 
(
l
e
t
 
k
 
=
 
0
;
 
k
 
<
 
(
f
r
a
m
e
.
j
I
n
P
a
t
t
e
r
n
 
?
?
 
0
)
;
 
k
+
+
)
 
{


 
 
 
 
 
 
i
f
 
(
s
h
i
f
t
 
+
 
k
 
<
 
n
)
 
t
e
x
t
S
t
a
t
e
s
[
s
h
i
f
t
 
+
 
k
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


 
 
 
 
 
 
p
a
t
S
t
a
t
e
s
[
k
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


 
 
 
 
}


 
 
 
 
i
f
 
(
f
r
a
m
e
.
i
I
n
T
e
x
t
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
&
&
 
f
r
a
m
e
.
i
I
n
T
e
x
t
 
<
 
n
 
&
&
 
f
r
a
m
e
.
j
I
n
P
a
t
t
e
r
n
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
&
&
 
f
r
a
m
e
.
j
I
n
P
a
t
t
e
r
n
 
<
 
m
)
 
{


 
 
 
 
 
 
t
e
x
t
S
t
a
t
e
s
[
f
r
a
m
e
.
i
I
n
T
e
x
t
]
 
=
 
f
r
a
m
e
.
m
i
s
m
a
t
c
h
 
?
 
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
 
:
 
"
a
c
t
i
v
e
"
;


 
 
 
 
 
 
p
a
t
S
t
a
t
e
s
[
f
r
a
m
e
.
j
I
n
P
a
t
t
e
r
n
]
 
=
 
f
r
a
m
e
.
m
i
s
m
a
t
c
h
 
?
 
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
 
:
 
"
a
c
t
i
v
e
"
;


 
 
 
 
}


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
f
 
o
f
 
f
r
a
m
e
.
f
o
u
n
d
 
?
?
 
[
]
)
 
{


 
 
 
 
 
 
f
o
r
 
(
l
e
t
 
k
 
=
 
0
;
 
k
 
<
 
m
;
 
k
+
+
)
 
i
f
 
(
f
 
+
 
k
 
<
 
n
)
 
t
e
x
t
S
t
a
t
e
s
[
f
 
+
 
k
]
 
=
 
"
d
o
n
e
"
;


 
 
 
 
}


 
 
}




 
 
c
o
n
s
t
 
l
p
s
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
m
)
.
f
i
l
l
(
u
n
d
e
f
i
n
e
d
)
;


 
 
i
f
 
(
f
r
a
m
e
.
p
h
a
s
e
 
=
=
=
 
"
l
p
s
"
 
&
&
 
f
r
a
m
e
.
l
p
s
I
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
&
&
 
f
r
a
m
e
.
l
p
s
I
 
<
 
m
)
 
l
p
s
S
t
a
t
e
s
[
f
r
a
m
e
.
l
p
s
I
]
 
=
 
"
a
c
t
i
v
e
"
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
.
5
 
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
p
t
-
6
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
b
o
l
d
 
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
 
t
e
x
t
-
c
e
n
t
e
r
 
m
b
-
1
"
>
T
e
x
t
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
M
e
m
o
r
y
C
e
l
l
s


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
s
=
{
t
e
x
t
.
s
p
l
i
t
(
"
"
)
.
m
a
p
(
(
c
)
 
=
>
 
(
c
 
=
=
=
 
"
 
"
 
?
 
"
.
"
 
:
 
c
)
)
}


 
 
 
 
 
 
 
 
 
 
s
t
a
t
e
s
=
{
t
e
x
t
S
t
a
t
e
s
}


 
 
 
 
 
 
 
 
 
 
p
o
i
n
t
e
r
s
=
{
f
r
a
m
e
.
i
I
n
T
e
x
t
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
&
&
 
f
r
a
m
e
.
i
I
n
T
e
x
t
 
<
 
n
 
?
 
{
 
i
:
 
f
r
a
m
e
.
i
I
n
T
e
x
t
 
}
 
:
 
{
}
}


 
 
 
 
 
 
 
 
 
 
c
e
l
l
W
i
d
t
h
=
{
3
6
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
 
p
t
-
6
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
i
n
l
i
n
e
-
f
l
e
x
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
a
r
g
i
n
L
e
f
t
:
 
`
m
a
x
(
0
p
x
,
 
$
{
s
h
i
f
t
 
*
 
3
8
}
p
x
)
`
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
m
a
r
g
i
n
-
l
e
f
t
 
0
.
3
5
s
 
e
a
s
e
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
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
b
o
l
d
 
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
 
t
e
x
t
-
c
e
n
t
e
r
 
m
b
-
1
"
>
P
a
t
t
e
r
n
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
m
o
r
y
C
e
l
l
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
t
e
r
n
.
s
p
l
i
t
(
"
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
t
e
s
=
{
p
a
t
S
t
a
t
e
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
o
i
n
t
e
r
s
=
{
f
r
a
m
e
.
j
I
n
P
a
t
t
e
r
n
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
&
&
 
f
r
a
m
e
.
j
I
n
P
a
t
t
e
r
n
 
<
 
m
 
?
 
{
 
j
:
 
f
r
a
m
e
.
j
I
n
P
a
t
t
e
r
n
 
}
 
:
 
{
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
e
l
l
W
i
d
t
h
=
{
3
6
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
1
 
p
t
-
2
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
b
o
l
d
 
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
L
P
S
 
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
M
e
m
o
r
y
C
e
l
l
s


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
s
=
{
f
r
a
m
e
.
l
p
s
}


 
 
 
 
 
 
 
 
 
 
s
t
a
t
e
s
=
{
l
p
s
S
t
a
t
e
s
}


 
 
 
 
 
 
 
 
 
 
p
o
i
n
t
e
r
s
=
{
f
r
a
m
e
.
p
h
a
s
e
 
=
=
=
 
"
l
p
s
"
 
&
&
 
f
r
a
m
e
.
l
p
s
I
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
?
 
{
 
i
:
 
f
r
a
m
e
.
l
p
s
I
 
}
 
:
 
{
}
}


 
 
 
 
 
 
 
 
 
 
c
e
l
l
W
i
d
t
h
=
{
3
6
}


 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
s
=
{
p
a
t
t
e
r
n
.
s
p
l
i
t
(
"
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
2
.
5
 
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
 
t
e
x
t
-
x
s
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
 
p
x
-
3
 
p
y
-
1
 
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
"


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
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
 
`
$
{
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
}
1
0
`
,
 
c
o
l
o
r
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
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
K
M
P
 
c
o
m
p
a
r
i
s
o
n
s
:
 
{
f
r
a
m
e
.
c
o
m
p
a
r
i
s
o
n
s
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
"


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
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
 
`
$
{
T
H
E
M
E
.
d
a
n
g
e
r
}
1
a
`
,
 
c
o
l
o
r
:
 
T
H
E
M
E
.
d
a
n
g
e
r
D
a
r
k
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
b
r
u
t
e
 
f
o
r
c
e
 
(
w
o
r
s
t
)
:
 
{
f
r
a
m
e
.
b
r
u
t
e
C
o
m
p
a
r
i
s
o
n
s
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
 
p
a
r
s
e
P
a
i
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
 
{
 
t
e
x
t
:
 
s
t
r
i
n
g
;
 
p
a
t
t
e
r
n
:
 
s
t
r
i
n
g
 
}
 
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
a
r
t
s
 
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
\
s
*
\
|
\
s
*
/
)
;


 
 
i
f
 
(
p
a
r
t
s
.
l
e
n
g
t
h
 
!
=
=
 
2
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
 
[
t
e
x
t
,
 
p
a
t
t
e
r
n
]
 
=
 
p
a
r
t
s
;


 
 
i
f
 
(
!
t
e
x
t
 
|
|
 
!
p
a
t
t
e
r
n
 
|
|
 
p
a
t
t
e
r
n
.
l
e
n
g
t
h
 
>
 
t
e
x
t
.
l
e
n
g
t
h
 
|
|
 
p
a
t
t
e
r
n
.
l
e
n
g
t
h
 
>
 
1
0
 
|
|
 
t
e
x
t
.
l
e
n
g
t
h
 
>
 
2
4
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
 
{
 
t
e
x
t
,
 
p
a
t
t
e
r
n
 
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
s
r
c
,
 
s
e
t
S
r
c
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
A
B
A
B
C
A
B
A
B
 
|
 
A
B
A
B
"
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
 
p
a
r
s
e
P
a
i
r
(
s
r
c
)
;


 
 
c
o
n
s
t
 
{
 
t
e
x
t
,
 
p
a
t
t
e
r
n
 
}
 
=
 
p
a
r
s
e
d
 
?
?
 
{
 
t
e
x
t
:
 
"
A
B
A
B
C
A
B
A
B
"
,
 
p
a
t
t
e
r
n
:
 
"
A
B
A
B
"
 
}
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
t
e
x
t
,
 
p
a
t
t
e
r
n
)
,
 
[
t
e
x
t
,
 
p
a
t
t
e
r
n
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
"
K
M
P
 
P
a
t
t
e
r
n
 
M
a
t
c
h
i
n
g
 
-
 
L
P
S
 
s
k
i
p
 
t
a
b
l
e
"


 
 
 
 
 
 
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
T
e
x
t
 
|
 
P
a
t
t
e
r
n
 
 
(
p
i
p
e
-
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
s
r
c
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
A
B
A
B
C
A
B
A
B
 
|
 
A
B
A
B
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
e
x
t
 
<
=
 
2
4
 
c
h
a
r
s
,
 
p
a
t
t
e
r
n
 
<
=
 
1
0
 
c
h
a
r
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
A
B
A
B
C
A
B
A
B
 
|
 
A
B
A
B
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
R
e
p
e
a
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
A
A
A
A
A
B
A
A
A
 
|
 
A
A
A
B
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
N
o
 
m
a
t
c
h
"
,
 
v
a
l
u
e
:
 
"
A
B
C
D
E
F
G
H
 
|
 
X
Y
Z
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
M
a
n
y
 
h
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
A
B
A
B
A
B
A
B
 
|
 
A
B
A
B
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
P
a
i
r
(
v
)
)
 
s
e
t
S
r
c
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
/
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
P
S
E
U
D
O
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
 
f
l
a
s
h
K
e
y
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
h
i
g
h
l
i
g
h
t
K
e
y
 
?
 
[
f
r
a
m
e
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
K
e
y
]
 
:
 
[
]
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
.
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
f
l
e
x
 
g
a
p
-
3
.
5
 
f
l
e
x
-
w
r
a
p
 
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
s
p
a
n
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
e
m
e
r
a
l
d
-
5
0
0
"
>
m
a
t
c
h
<
/
s
t
r
o
n
g
>
 
-
 
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
 
a
l
i
g
n
e
d
 
a
n
d
 
e
q
u
a
l
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
r
e
d
-
5
0
0
"
>
m
i
s
m
a
t
c
h
<
/
s
t
r
o
n
g
>
 
-
 
p
a
t
t
e
r
n
 
m
u
s
t
 
s
h
i
f
t
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
b
l
u
e
-
5
0
0
"
>
a
c
t
i
v
e
<
/
s
t
r
o
n
g
>
 
-
 
c
u
r
r
e
n
t
 
p
o
s
i
t
i
o
n
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


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
K
M
P
V
i
s
u
a
l
i
z
a
t
i
o
n
 
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
 
t
e
x
t
=
{
t
e
x
t
}
 
p
a
t
t
e
r
n
=
{
p
a
t
t
e
r
n
}
 
/
>
}


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
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
 
s
e
c
t
i
o
n
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
T
h
e
 
n
a
i
v
e
 
w
a
y
"
,
 
b
o
d
y
:
 
"
B
r
u
t
e
-
f
o
r
c
e
 
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
 
s
l
i
d
e
s
 
t
h
e
 
p
a
t
t
e
r
n
 
o
n
e
 
p
o
s
i
t
i
o
n
 
a
t
 
a
 
t
i
m
e
,
 
r
e
-
c
h
e
c
k
i
n
g
 
e
v
e
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
.
 
W
o
r
s
t
 
c
a
s
e
 
O
(
n
*
m
)
 
-
 
p
a
i
n
f
u
l
 
o
n
 
r
e
p
e
t
i
t
i
v
e
 
t
e
x
t
 
l
i
k
e
 
'
A
A
A
A
A
B
'
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
K
e
y
 
i
n
s
i
g
h
t
"
,
 
b
o
d
y
:
 
"
W
h
e
n
 
a
 
m
i
s
m
a
t
c
h
 
h
a
p
p
e
n
s
 
a
f
t
e
r
 
p
a
r
t
i
a
l
 
m
a
t
c
h
e
s
,
 
t
h
e
 
p
a
t
t
e
r
n
'
s
 
o
w
n
 
s
t
r
u
c
t
u
r
e
 
t
e
l
l
s
 
u
s
 
h
o
w
 
f
a
r
 
w
e
 
c
a
n
 
s
a
f
e
l
y
 
s
k
i
p
 
w
i
t
h
o
u
t
 
l
o
s
i
n
g
 
a
 
p
o
t
e
n
t
i
a
l
 
m
a
t
c
h
.
 
N
o
 
n
e
e
d
 
t
o
 
r
e
-
e
x
a
m
i
n
e
 
t
e
x
t
 
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
 
w
e
 
a
l
r
e
a
d
y
 
m
a
t
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
L
P
S
 
t
a
b
l
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
o
r
 
e
a
c
h
 
p
r
e
f
i
x
 
p
[
0
.
.
i
]
 
o
f
 
t
h
e
 
p
a
t
t
e
r
n
,
 
l
p
s
[
i
]
 
=
 
l
e
n
g
t
h
 
o
f
 
t
h
e
 
l
o
n
g
e
s
t
 
p
r
o
p
e
r
 
p
r
e
f
i
x
 
o
f
 
p
[
0
.
.
i
]
 
t
h
a
t
 
i
s
 
a
l
s
o
 
i
t
s
 
s
u
f
f
i
x
.
 
'
A
B
A
B
'
 
-
>
 
l
p
s
 
=
 
[
0
,
0
,
1
,
2
]
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
M
a
t
c
h
i
n
g
 
p
h
a
s
e
"
,
 
b
o
d
y
:
 
"
O
n
 
a
 
m
i
s
m
a
t
c
h
 
a
t
 
p
[
j
]
,
 
f
a
l
l
 
b
a
c
k
 
t
o
 
j
 
=
 
l
p
s
[
j
-
1
]
;
 
k
e
e
p
 
i
 
(
t
e
x
t
 
i
n
d
e
x
)
.
 
T
h
a
t
 
m
o
v
e
s
 
t
h
e
 
p
a
t
t
e
r
n
 
f
o
r
w
a
r
d
 
w
h
i
l
e
 
r
e
u
s
i
n
g
 
m
a
t
c
h
e
d
 
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
.
 
E
a
c
h
 
t
e
x
t
 
i
n
d
e
x
 
i
s
 
c
o
m
p
a
r
e
d
 
a
t
 
m
o
s
t
 
t
w
i
c
e
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
C
o
m
p
l
e
x
i
t
y
"
,
 
b
o
d
y
:
 
"
P
r
e
p
r
o
c
e
s
s
i
n
g
:
 
O
(
m
)
.
 
M
a
t
c
h
i
n
g
:
 
O
(
n
)
.
 
T
o
t
a
l
:
 
O
(
n
 
+
 
m
)
,
 
d
e
t
e
r
m
i
n
i
s
t
i
c
,
 
n
o
 
h
a
s
h
i
n
g
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
U
s
e
d
 
i
n
"
,
 
b
o
d
y
:
 
"
g
r
e
p
 
f
a
l
l
b
a
c
k
,
 
D
N
A
 
s
e
q
u
e
n
c
e
 
s
e
a
r
c
h
,
 
p
l
a
g
i
a
r
i
s
m
 
d
e
t
e
c
t
i
o
n
,
 
a
n
d
 
i
n
t
e
r
v
i
e
w
-
f
a
v
o
r
i
t
e
 
L
P
S
 
c
o
m
p
u
t
a
t
i
o
n
 
q
u
e
s
t
i
o
n
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
3
.
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
L
i
n
e
a
r
-
t
i
m
e
 
m
a
t
c
h
i
n
g
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
P
a
t
t
e
r
n
 
r
e
m
e
m
b
e
r
s
 
i
t
s
 
o
w
n
 
s
e
l
f
-
s
i
m
i
l
a
r
i
t
y
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


 
 
 
 
 
 
 
 
 
 
T
h
e
 
p
a
t
t
e
r
n
 
i
s
 
s
m
a
r
t
 
e
n
o
u
g
h
 
t
o
 
r
e
m
e
m
b
e
r
 
i
t
s
 
o
w
n
 
s
e
l
f
-
s
i
m
i
l
a
r
i
t
y
.
 
W
h
e
n
 
t
e
x
t
 
a
n
d
 
p
a
t
t
e
r
n
 
d
i
s
a
g
r
e
e
,


 
 
 
 
 
 
 
 
 
 
w
e
 
a
l
r
e
a
d
y
 
k
n
o
w
 
h
o
w
 
t
h
e
 
p
a
t
t
e
r
n
 
o
v
e
r
l
a
p
s
 
w
i
t
h
 
i
t
s
e
l
f
,
 
s
o
 
w
e
 
c
a
n
 
s
k
i
p
 
a
h
e
a
d
 
w
i
t
h
o
u
t
 
b
a
c
k
t
r
a
c
k
i
n
g
 
i
n
 
t
h
e
 
t
e
x
t
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
a
p
-
2
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
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
r
e
p
e
a
t
(
a
u
t
o
-
f
i
t
,
 
m
i
n
m
a
x
(
2
6
0
p
x
,
 
1
f
r
)
)
"
 
}
}
>


 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
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
C
a
r
d
 
k
e
y
=
{
i
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
1
.
5
 
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
C
a
r
d
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
C
o
m
p
u
t
e
 
L
P
S
 
f
o
r
 
p
a
t
t
e
r
n
 
'
A
B
A
B
C
'
.
"
,
 
a
n
s
w
e
r
:
 
"
0
,
0
,
1
,
2
,
0
"
 
}
,


 
 
 
 
{
 
q
:
 
"
C
o
m
p
u
t
e
 
L
P
S
 
f
o
r
 
p
a
t
t
e
r
n
 
'
A
A
A
A
'
.
"
,
 
a
n
s
w
e
r
:
 
"
0
,
1
,
2
,
3
"
 
}
,


 
 
 
 
{
 
q
:
 
"
U
s
i
n
g
 
K
M
P
,
 
m
a
t
c
h
i
n
g
 
'
A
B
A
B
A
B
C
A
B
A
B
'
 
v
s
 
'
A
B
A
B
C
'
 
-
 
a
t
 
w
h
a
t
 
t
e
x
t
 
i
n
d
e
x
 
d
o
e
s
 
t
h
e
 
f
i
r
s
t
 
m
a
t
c
h
 
s
t
a
r
t
?
"
,
 
a
n
s
w
e
r
:
 
"
2
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
u
e
s
s
e
s
,
 
s
e
t
G
u
e
s
s
e
s
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
s
t
r
i
n
g
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
 
"
"
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
h
o
w
n
,
 
s
e
t
S
h
o
w
n
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


 
 
c
o
n
s
t
 
n
o
r
m
 
=
 
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
 
=
>
 
s
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


 
 
 
 
 
 
 
 
C
o
m
p
u
t
e
 
b
y
 
h
a
n
d
.
 
F
o
r
 
L
P
S
 
a
n
s
w
e
r
s
,
 
u
s
e
 
c
o
m
m
a
-
s
e
p
a
r
a
t
e
d
 
i
n
t
e
g
e
r
s
 
(
e
.
g
.
 
&
q
u
o
t
;
0
,
0
,
1
,
2
,
0
&
q
u
o
t
;
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
 
c
o
r
r
e
c
t
 
=
 
n
o
r
m
(
g
u
e
s
s
e
s
[
i
]
)
 
=
=
=
 
n
o
r
m
(
p
.
a
n
s
w
e
r
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
C
a
r
d
 
k
e
y
=
{
i
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
2
.
5
 
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
p
.
q
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
 
g
a
p
-
2
 
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
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
g
u
e
s
s
e
s
[
i
]
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
 
g
 
=
 
[
.
.
.
g
u
e
s
s
e
s
]
;
 
g
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
u
e
s
s
e
s
(
g
)
;
 
}
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
y
o
u
r
 
a
n
s
w
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
2
.
5
 
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
m
 
w
-
4
4
 
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
 
f
o
c
u
s
:
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
 
s
 
=
 
[
.
.
.
s
h
o
w
n
]
;
 
s
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
h
o
w
n
(
s
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
4
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
h
o
w
n
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
"
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
c
o
r
r
e
c
t
 
?
 
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
D
a
r
k
 
:
 
T
H
E
M
E
.
d
a
n
g
e
r
D
a
r
k
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
 
c
o
r
r
e
c
t
 
?
 
`
$
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
1
4
`
 
:
 
`
$
{
T
H
E
M
E
.
d
a
n
g
e
r
}
1
4
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
 
`
C
o
r
r
e
c
t
:
 
$
{
p
.
a
n
s
w
e
r
}
`
 
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
n
s
w
e
r
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


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
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
3
"
>


 
 
 
 
 
 
<
C
a
r
d
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
 
n
e
v
e
r
 
g
o
e
s
 
b
a
c
k
w
a
r
d
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


 
 
 
 
 
 
 
 
 
 
T
h
e
 
c
r
u
c
i
a
l
 
p
r
o
p
e
r
t
y
:
 
t
h
e
 
t
e
x
t
 
p
o
i
n
t
e
r
 
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
 
m
o
n
o
t
o
n
e
 
n
o
n
-
d
e
c
r
e
a
s
i
n
g
.


 
 
 
 
 
 
 
 
 
 
E
i
t
h
e
r
 
w
e
 
a
d
v
a
n
c
e
 
i
t
 
o
n
 
a
 
m
a
t
c
h
,
 
o
r
 
j
 
f
a
l
l
s
 
b
a
c
k
 
w
h
i
l
e
 
i
 
s
t
a
y
s
.
 
S
i
n
c
e
 
j
 
c
a
n
 
o
n
l
y
 
d
e
c
r
e
a
s
e
 
w
h
e
n


 
 
 
 
 
 
 
 
 
 
i
 
d
o
e
s
n
&
a
p
o
s
;
t
 
m
o
v
e
,
 
a
n
d
 
j
 
c
a
n
 
o
n
l
y
 
i
n
c
r
e
a
s
e
 
w
h
e
n
 
i
 
d
o
e
s
,
 
t
h
e
 
t
o
t
a
l
 
n
u
m
b
e
r
 
o
f
 
c
o
m
p
a
r
i
s
o
n
s
 
i
s
 
O
(
n
 
+
 
m
)
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
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
I
n
t
e
r
v
i
e
w
 
t
r
a
p
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
 
p
l
-
5
 
l
i
s
t
-
d
i
s
c
 
s
p
a
c
e
-
y
-
1
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
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
l
p
s
[
0
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
 
a
l
w
a
y
s
 
0
.
 
&
q
u
o
t
;
P
r
o
p
e
r
&
q
u
o
t
;
 
p
r
e
f
i
x
 
e
x
c
l
u
d
e
s
 
t
h
e
 
f
u
l
l
 
s
t
r
i
n
g
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
W
h
e
n
 
p
a
t
t
e
r
n
 
h
a
s
 
n
o
 
r
e
p
e
t
i
t
i
v
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
 
(
e
.
g
.
 
&
q
u
o
t
;
A
B
C
D
E
&
q
u
o
t
;
)
,
 
l
p
s
 
i
s
 
a
l
l
 
z
e
r
o
s
 
a
n
d
 
K
M
P
 
d
e
g
r
a
d
e
s
 
t
o
 
o
n
e
-
s
t
e
p
 
s
l
i
d
e
,
 
b
u
t
 
s
t
i
l
l
 
O
(
n
 
+
 
m
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
A
f
t
e
r
 
r
e
p
o
r
t
i
n
g
 
a
 
m
a
t
c
h
,
 
s
h
i
f
t
 
t
h
e
 
p
a
t
t
e
r
n
 
b
y
 
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
l
p
s
[
m
-
1
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
,
 
n
o
t
 
b
y
 
1
.
 
T
h
i
s
 
l
e
t
s
 
o
v
e
r
l
a
p
p
i
n
g
 
m
a
t
c
h
e
s
 
b
e
 
f
o
u
n
d
 
c
o
r
r
e
c
t
l
y
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
/
C
a
r
d
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
 
 
A
c
t
i
v
i
t
y
 
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
7
_
K
M
P
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
W
o
r
s
t
-
c
a
s
e
 
t
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
 
K
M
P
 
(
p
r
e
p
r
o
c
e
s
s
i
n
g
 
+
 
s
e
a
r
c
h
i
n
g
)
 
i
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
O
(
n
·
m
)
"
,
 
"
O
(
n
 
+
 
m
)
"
,
 
"
O
(
n
 
l
o
g
 
m
)
"
,
 
"
O
(
m
²
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
K
M
P
 
r
u
n
s
 
i
n
 
O
(
m
)
 
p
r
e
p
r
o
c
e
s
s
i
n
g
 
t
o
 
b
u
i
l
d
 
L
P
S
 
a
n
d
 
O
(
n
)
 
t
o
 
s
e
a
r
c
h
 
-
 
t
o
t
a
l
 
l
i
n
e
a
r
 
i
n
 
t
h
e
 
s
u
m
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
L
P
S
 
f
o
r
 
'
A
B
A
B
C
A
B
A
B
'
 
i
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
[
0
,
0
,
1
,
2
,
0
,
1
,
2
,
3
,
4
]
"
,
 
"
[
0
,
0
,
1
,
2
,
3
,
1
,
2
,
3
,
4
]
"
,
 
"
[
0
,
1
,
2
,
3
,
4
,
1
,
2
,
3
,
4
]
"
,
 
"
[
0
,
0
,
1
,
1
,
0
,
1
,
2
,
3
,
4
]
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
T
r
a
c
e
 
t
h
r
o
u
g
h
:
 
A
-
>
0
,
 
A
B
-
>
0
,
 
A
B
A
-
>
1
,
 
A
B
A
B
-
>
2
,
 
A
B
A
B
C
-
>
0
,
 
A
B
A
B
C
A
-
>
1
,
 
A
B
A
B
C
A
B
-
>
2
,
 
A
B
A
B
C
A
B
A
-
>
3
,
 
A
B
A
B
C
A
B
A
B
-
>
4
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
O
n
 
a
 
m
i
s
m
a
t
c
h
 
a
t
 
p
a
t
t
e
r
n
 
i
n
d
e
x
 
j
 
(
j
>
0
)
,
 
K
M
P
 
s
e
t
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
j
 
<
-
 
0
"
,
 
"
j
 
<
-
 
j
-
1
"
,
 
"
j
 
<
-
 
l
p
s
[
j
-
1
]
"
,
 
"
j
 
<
-
 
l
p
s
[
j
]
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
W
e
 
r
e
u
s
e
 
t
h
e
 
l
o
n
g
e
s
t
 
p
r
o
p
e
r
 
p
r
e
f
i
x
-
s
u
f
f
i
x
 
o
f
 
t
h
e
 
m
a
t
c
h
e
d
 
s
e
g
m
e
n
t
 
-
 
t
h
a
t
'
s
 
l
p
s
[
j
-
1
]
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
 
i
s
 
K
M
P
 
s
t
r
i
c
t
l
y
 
b
e
t
t
e
r
 
t
h
a
n
 
n
a
i
v
e
 
m
a
t
c
h
i
n
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
I
t
 
u
s
e
s
 
h
a
s
h
i
n
g
 
t
o
 
s
k
i
p
 
c
o
m
p
a
r
i
s
o
n
s
"
,


 
 
 
 
 
 
 
 
"
I
t
 
n
e
v
e
r
 
r
e
-
c
o
m
p
a
r
e
s
 
t
e
x
t
 
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
 
a
l
r
e
a
d
y
 
v
a
l
i
d
a
t
e
d
"
,


 
 
 
 
 
 
 
 
"
I
t
 
u
s
e
s
 
l
e
s
s
 
m
e
m
o
r
y
"
,


 
 
 
 
 
 
 
 
"
I
t
 
r
a
n
d
o
m
l
y
 
s
h
u
f
f
l
e
s
 
c
o
m
p
a
r
i
s
o
n
s
 
f
o
r
 
s
p
e
e
d
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
T
h
e
 
t
e
x
t
 
p
o
i
n
t
e
r
 
i
 
n
e
v
e
r
 
m
o
v
e
s
 
b
a
c
k
w
a
r
d
 
-
 
m
a
t
c
h
e
d
 
p
r
e
f
i
x
e
s
 
g
i
v
e
 
f
r
e
e
 
i
n
f
o
r
m
a
t
i
o
n
 
a
b
o
u
t
 
h
o
w
 
t
o
 
r
e
a
l
i
g
n
 
t
h
e
 
p
a
t
t
e
r
n
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
K
M
P
 
S
t
r
i
n
g
 
M
a
t
c
h
i
n
g
"


 
 
 
 
 
 
l
e
v
e
l
=
{
7
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
5
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
M
e
d
i
u
m
 
-
 
s
t
r
i
n
g
 
a
l
g
o
r
i
t
h
m
s
,
 
s
u
b
s
t
r
i
n
g
 
s
e
a
r
c
h
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
Z
-
F
u
n
c
t
i
o
n
 
&
 
M
a
n
a
c
h
e
r
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


