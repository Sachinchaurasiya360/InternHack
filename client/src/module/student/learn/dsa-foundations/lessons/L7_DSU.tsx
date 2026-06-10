
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
u
n
i
o
n
-
f
i
n
d
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
 
 
T
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
a
r
e
n
t
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


 
 
r
a
n
k
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
o
n
e
n
t
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
e
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
;


 
 
c
o
m
p
r
e
s
s
e
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
 
 
D
S
U
 
s
i
m
u
l
a
t
o
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
f
u
n
c
t
i
o
n
 
f
i
n
d
(
x
)
:
"
,


 
 
"
 
 
i
f
 
p
a
r
e
n
t
[
x
]
 
!
=
 
x
:
"
,


 
 
"
 
 
 
 
p
a
r
e
n
t
[
x
]
 
<
-
 
f
i
n
d
(
p
a
r
e
n
t
[
x
]
)
 
 
 
#
 
p
a
t
h
 
c
o
m
p
r
e
s
s
i
o
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
 
p
a
r
e
n
t
[
x
]
"
,


 
 
"
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
 
u
n
i
o
n
(
x
,
 
y
)
:
"
,


 
 
"
 
 
r
x
 
<
-
 
f
i
n
d
(
x
)
;
 
r
y
 
<
-
 
f
i
n
d
(
y
)
"
,


 
 
"
 
 
i
f
 
r
x
 
=
 
r
y
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
 
r
a
n
k
[
r
x
]
 
<
 
r
a
n
k
[
r
y
]
:
 
s
w
a
p
(
r
x
,
 
r
y
)
"
,


 
 
"
 
 
p
a
r
e
n
t
[
r
y
]
 
<
-
 
r
x
"
,


 
 
"
 
 
i
f
 
r
a
n
k
[
r
x
]
 
=
 
r
a
n
k
[
r
y
]
:
 
r
a
n
k
[
r
x
]
 
+
=
 
1
"
,


 
 
"
 
 
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
 
-
=
 
1
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
 
c
l
o
n
e
A
r
r
(
a
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
 
r
e
t
u
r
n
 
a
.
s
l
i
c
e
(
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
 
t
r
a
c
e
F
i
n
d
(
p
a
r
e
n
t
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
 
x
:
 
n
u
m
b
e
r
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
,
 
r
a
n
k
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


 
 
c
o
n
s
t
 
p
a
t
h
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
 
c
u
r
 
=
 
x
;


 
 
w
h
i
l
e
 
(
p
a
r
e
n
t
[
c
u
r
]
 
!
=
=
 
c
u
r
)
 
{
 
p
a
t
h
.
p
u
s
h
(
c
u
r
)
;
 
c
u
r
 
=
 
p
a
r
e
n
t
[
c
u
r
]
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
 
c
u
r
;


 
 
p
a
t
h
.
p
u
s
h
(
r
o
o
t
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
 
0
,


 
 
 
 
v
a
r
s
:
 
{
 
x
,
 
p
a
t
h
:
 
p
a
t
h
.
j
o
i
n
(
"
-
>
"
)
,
 
r
o
o
t
,
 
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
f
i
n
d
(
$
{
x
}
)
 
-
 
w
a
l
k
 
t
h
e
 
p
a
r
e
n
t
 
c
h
a
i
n
 
t
o
 
t
h
e
 
r
o
o
t
.
`
,


 
 
 
 
p
a
r
e
n
t
:
 
c
l
o
n
e
A
r
r
(
p
a
r
e
n
t
)
,
 
r
a
n
k
:
 
c
l
o
n
e
A
r
r
(
r
a
n
k
)
,
 
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
e
d
:
 
p
a
t
h
.
s
l
i
c
e
(
)
,


 
 
 
 
c
o
m
p
r
e
s
s
e
d
:
 
[
]
,


 
 
}
)
;


 
 
c
o
n
s
t
 
t
o
C
o
m
p
r
e
s
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
a
t
h
.
l
e
n
g
t
h
 
-
 
1
;
 
i
+
+
)
 
{


 
 
 
 
i
f
 
(
p
a
r
e
n
t
[
p
a
t
h
[
i
]
]
 
!
=
=
 
r
o
o
t
)
 
t
o
C
o
m
p
r
e
s
s
.
p
u
s
h
(
p
a
t
h
[
i
]
)
;


 
 
 
 
p
a
r
e
n
t
[
p
a
t
h
[
i
]
]
 
=
 
r
o
o
t
;


 
 
}


 
 
i
f
 
(
t
o
C
o
m
p
r
e
s
s
.
l
e
n
g
t
h
 
>
 
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
 
2
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
x
,
 
r
o
o
t
,
 
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
a
t
h
 
c
o
m
p
r
e
s
s
i
o
n
 
-
 
r
e
-
a
t
t
a
c
h
 
$
{
t
o
C
o
m
p
r
e
s
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
 
d
i
r
e
c
t
l
y
 
t
o
 
r
o
o
t
 
$
{
r
o
o
t
}
.
`
,


 
 
 
 
 
 
p
a
r
e
n
t
:
 
c
l
o
n
e
A
r
r
(
p
a
r
e
n
t
)
,
 
r
a
n
k
:
 
c
l
o
n
e
A
r
r
(
r
a
n
k
)
,
 
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
e
d
:
 
[
r
o
o
t
]
,


 
 
 
 
 
 
c
o
m
p
r
e
s
s
e
d
:
 
t
o
C
o
m
p
r
e
s
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
 
r
o
o
t
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
r
a
m
e
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
,
 
o
p
s
:
 
{
 
k
i
n
d
:
 
"
u
n
i
o
n
"
 
|
 
"
f
i
n
d
"
;
 
a
:
 
n
u
m
b
e
r
;
 
b
?
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
 
p
a
r
e
n
t
 
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
 
n
 
}
,
 
(
_
,
 
i
)
 
=
>
 
i
)
;


 
 
c
o
n
s
t
 
r
a
n
k
 
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
0
)
;


 
 
l
e
t
 
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
 
=
 
n
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
 
v
a
r
s
:
 
{
 
n
,
 
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
t
a
r
t
 
-
 
$
{
n
}
 
i
s
o
l
a
t
e
d
 
n
o
d
e
s
.
 
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
 
=
 
$
{
n
}
.
`
,


 
 
 
 
p
a
r
e
n
t
:
 
c
l
o
n
e
A
r
r
(
p
a
r
e
n
t
)
,
 
r
a
n
k
:
 
c
l
o
n
e
A
r
r
(
r
a
n
k
)
,
 
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
e
d
:
 
[
]
,
 
c
o
m
p
r
e
s
s
e
d
:
 
[
]
,


 
 
}
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
 
o
p
 
o
f
 
o
p
s
)
 
{


 
 
 
 
i
f
 
(
o
p
.
k
i
n
d
 
=
=
=
 
"
f
i
n
d
"
)
 
{


 
 
 
 
 
 
i
f
 
(
o
p
.
a
 
<
 
0
 
|
|
 
o
p
.
a
 
>
=
 
n
)
 
c
o
n
t
i
n
u
e
;


 
 
 
 
 
 
t
r
a
c
e
F
i
n
d
(
p
a
r
e
n
t
,
 
o
p
.
a
,
 
f
r
a
m
e
s
,
 
r
a
n
k
,
 
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
)
;


 
 
 
 
 
 
c
o
n
t
i
n
u
e
;


 
 
 
 
}


 
 
 
 
c
o
n
s
t
 
a
 
=
 
o
p
.
a
,
 
b
 
=
 
o
p
.
b
!
;


 
 
 
 
i
f
 
(
a
 
<
 
0
 
|
|
 
a
 
>
=
 
n
 
|
|
 
b
 
<
 
0
 
|
|
 
b
 
>
=
 
n
)
 
c
o
n
t
i
n
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
 
5
,
 
v
a
r
s
:
 
{
 
x
:
 
a
,
 
y
:
 
b
,
 
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
u
n
i
o
n
(
$
{
a
}
,
 
$
{
b
}
)
 
-
 
f
i
n
d
 
r
o
o
t
s
 
o
f
 
e
a
c
h
.
`
,


 
 
 
 
 
 
p
a
r
e
n
t
:
 
c
l
o
n
e
A
r
r
(
p
a
r
e
n
t
)
,
 
r
a
n
k
:
 
c
l
o
n
e
A
r
r
(
r
a
n
k
)
,
 
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
e
d
:
 
[
a
,
 
b
]
,
 
c
o
m
p
r
e
s
s
e
d
:
 
[
]
,


 
 
 
 
}
)
;


 
 
 
 
c
o
n
s
t
 
r
x
0
 
=
 
t
r
a
c
e
F
i
n
d
(
p
a
r
e
n
t
,
 
a
,
 
f
r
a
m
e
s
,
 
r
a
n
k
,
 
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
)
;


 
 
 
 
c
o
n
s
t
 
r
y
0
 
=
 
t
r
a
c
e
F
i
n
d
(
p
a
r
e
n
t
,
 
b
,
 
f
r
a
m
e
s
,
 
r
a
n
k
,
 
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
)
;


 
 
 
 
l
e
t
 
r
x
 
=
 
r
x
0
,
 
r
y
 
=
 
r
y
0
;


 
 
 
 
i
f
 
(
r
x
 
=
=
=
 
r
y
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
 
7
,
 
v
a
r
s
:
 
{
 
x
:
 
a
,
 
y
:
 
b
,
 
r
x
,
 
r
y
,
 
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
R
o
o
t
s
 
i
d
e
n
t
i
c
a
l
 
(
$
{
r
x
}
)
 
-
 
a
l
r
e
a
d
y
 
i
n
 
s
a
m
e
 
c
o
m
p
o
n
e
n
t
.
`
,


 
 
 
 
 
 
 
 
p
a
r
e
n
t
:
 
c
l
o
n
e
A
r
r
(
p
a
r
e
n
t
)
,
 
r
a
n
k
:
 
c
l
o
n
e
A
r
r
(
r
a
n
k
)
,
 
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
e
d
:
 
[
r
x
]
,
 
c
o
m
p
r
e
s
s
e
d
:
 
[
]
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
c
o
n
t
i
n
u
e
;


 
 
 
 
}


 
 
 
 
i
f
 
(
r
a
n
k
[
r
x
]
 
<
 
r
a
n
k
[
r
y
]
)
 
{
 
c
o
n
s
t
 
t
 
=
 
r
x
;
 
r
x
 
=
 
r
y
;
 
r
y
 
=
 
t
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
 
8
,
 
v
a
r
s
:
 
{
 
r
x
,
 
r
y
,
 
"
r
a
n
k
[
r
x
]
"
:
 
r
a
n
k
[
r
x
]
,
 
"
r
a
n
k
[
r
y
]
"
:
 
r
a
n
k
[
r
y
]
,
 
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
A
t
t
a
c
h
 
s
m
a
l
l
e
r
 
t
r
e
e
 
(
r
o
o
t
 
$
{
r
y
}
,
 
r
a
n
k
 
$
{
r
a
n
k
[
r
y
]
}
)
 
u
n
d
e
r
 
l
a
r
g
e
r
 
(
r
o
o
t
 
$
{
r
x
}
,
 
r
a
n
k
 
$
{
r
a
n
k
[
r
x
]
}
)
.
`
,


 
 
 
 
 
 
p
a
r
e
n
t
:
 
c
l
o
n
e
A
r
r
(
p
a
r
e
n
t
)
,
 
r
a
n
k
:
 
c
l
o
n
e
A
r
r
(
r
a
n
k
)
,
 
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
e
d
:
 
[
r
x
,
 
r
y
]
,
 
c
o
m
p
r
e
s
s
e
d
:
 
[
]
,


 
 
 
 
}
)
;


 
 
 
 
p
a
r
e
n
t
[
r
y
]
 
=
 
r
x
;


 
 
 
 
i
f
 
(
r
a
n
k
[
r
x
]
 
=
=
=
 
r
a
n
k
[
r
y
]
)
 
r
a
n
k
[
r
x
]
 
+
=
 
1
;


 
 
 
 
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
 
-
=
 
1
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
1
,
 
v
a
r
s
:
 
{
 
r
x
,
 
r
y
,
 
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
e
r
g
e
d
.
 
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
 
=
 
$
{
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
}
.
`
,


 
 
 
 
 
 
p
a
r
e
n
t
:
 
c
l
o
n
e
A
r
r
(
p
a
r
e
n
t
)
,
 
r
a
n
k
:
 
c
l
o
n
e
A
r
r
(
r
a
n
k
)
,
 
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
e
d
:
 
[
r
x
]
,
 
c
o
m
p
r
e
s
s
e
d
:
 
[
]
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
o
n
e
n
t
s
"
,


 
 
 
 
}
)
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
 
v
a
r
s
:
 
{
 
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
 
-
 
$
{
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
}
 
c
o
m
p
o
n
e
n
t
(
s
)
 
r
e
m
a
i
n
.
`
,


 
 
 
 
p
a
r
e
n
t
:
 
c
l
o
n
e
A
r
r
(
p
a
r
e
n
t
)
,
 
r
a
n
k
:
 
c
l
o
n
e
A
r
r
(
r
a
n
k
)
,
 
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
e
d
:
 
[
]
,
 
c
o
m
p
r
e
s
s
e
d
:
 
[
]
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
 
 
F
o
r
e
s
t
 
r
e
n
d
e
r
e
r
 
(
l
o
c
a
l
 
S
V
G
-
b
a
s
e
d
)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
R
O
O
T
_
C
O
L
O
R
S
 
=
 
[
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
 
"
#
e
c
4
8
9
9
"
,
 
"
#
0
6
b
6
d
4
"
,
 
"
#
f
9
7
3
1
6
"
]
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
 
T
r
e
e
L
a
y
o
u
t
 
{


 
 
i
d
:
 
n
u
m
b
e
r
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


 
 
p
a
r
e
n
t
I
d
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
e
e
(
r
o
o
t
:
 
n
u
m
b
e
r
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
 
R
e
c
o
r
d
<
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
[
]
>
,
 
d
e
p
t
h
 
=
 
0
,
 
x
O
f
f
s
e
t
 
=
 
{
 
v
a
l
:
 
0
 
}
)
:
 
T
r
e
e
L
a
y
o
u
t
[
]
 
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
:
 
T
r
e
e
L
a
y
o
u
t
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
 
k
i
d
s
 
=
 
c
h
i
l
d
r
e
n
[
r
o
o
t
]
 
?
?
 
[
]
;


 
 
i
f
 
(
k
i
d
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


 
 
 
 
n
o
d
e
s
.
p
u
s
h
(
{
 
i
d
:
 
r
o
o
t
,
 
x
:
 
x
O
f
f
s
e
t
.
v
a
l
,
 
y
:
 
d
e
p
t
h
 
}
)
;


 
 
 
 
x
O
f
f
s
e
t
.
v
a
l
+
+
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
 
s
t
a
r
t
X
 
=
 
x
O
f
f
s
e
t
.
v
a
l
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
 
k
i
d
s
)
 
{


 
 
 
 
 
 
l
a
y
o
u
t
T
r
e
e
(
c
h
i
l
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
,
 
d
e
p
t
h
 
+
 
1
,
 
x
O
f
f
s
e
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
 
n
o
d
e
s
.
p
u
s
h
(
{
 
.
.
.
n
,
 
p
a
r
e
n
t
I
d
:
 
n
.
i
d
 
=
=
=
 
c
h
i
l
d
 
?
 
r
o
o
t
 
:
 
n
.
p
a
r
e
n
t
I
d
 
}
)
)
;


 
 
 
 
}


 
 
 
 
c
o
n
s
t
 
e
n
d
X
 
=
 
x
O
f
f
s
e
t
.
v
a
l
 
-
 
1
;


 
 
 
 
n
o
d
e
s
.
p
u
s
h
(
{
 
i
d
:
 
r
o
o
t
,
 
x
:
 
(
s
t
a
r
t
X
 
+
 
e
n
d
X
)
 
/
 
2
,
 
y
:
 
d
e
p
t
h
 
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
 
n
o
d
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
 
F
o
r
e
s
t
(
{
 
f
r
a
m
e
 
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
a
r
e
n
t
,
 
r
a
n
k
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
e
d
,
 
c
o
m
p
r
e
s
s
e
d
 
}
 
=
 
f
r
a
m
e
;


 
 
c
o
n
s
t
 
n
 
=
 
p
a
r
e
n
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
 
r
o
o
t
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
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
n
;
 
i
+
+
)
 
i
f
 
(
p
a
r
e
n
t
[
i
]
 
=
=
=
 
i
)
 
r
o
o
t
s
.
p
u
s
h
(
i
)
;




 
 
c
o
n
s
t
 
c
o
l
o
r
B
y
R
o
o
t
:
 
R
e
c
o
r
d
<
n
u
m
b
e
r
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
}
;


 
 
r
o
o
t
s
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
r
,
 
i
)
 
=
>
 
{
 
c
o
l
o
r
B
y
R
o
o
t
[
r
]
 
=
 
R
O
O
T
_
C
O
L
O
R
S
[
i
 
%
 
R
O
O
T
_
C
O
L
O
R
S
.
l
e
n
g
t
h
]
;
 
}
)
;




 
 
c
o
n
s
t
 
g
e
t
R
o
o
t
 
=
 
(
x
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
 
=
>
 
{


 
 
 
 
w
h
i
l
e
 
(
p
a
r
e
n
t
[
x
]
 
!
=
=
 
x
)
 
x
 
=
 
p
a
r
e
n
t
[
x
]
;


 
 
 
 
r
e
t
u
r
n
 
x
;


 
 
}
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
4
 
f
l
e
x
-
w
r
a
p
 
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
r
o
o
t
s
.
m
a
p
(
(
r
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
[
]
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
 
i
 
=
 
0
;
 
i
 
<
 
n
;
 
i
+
+
)
 
c
h
i
l
d
r
e
n
[
i
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
 
0
;
 
i
 
<
 
n
;
 
i
+
+
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
p
a
r
e
n
t
[
i
]
 
!
=
=
 
i
 
&
&
 
g
e
t
R
o
o
t
(
i
)
 
=
=
=
 
r
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
(
c
h
i
l
d
r
e
n
[
p
a
r
e
n
t
[
i
]
]
 
|
|
=
 
[
]
)
.
p
u
s
h
(
i
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
}




 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
O
f
f
 
=
 
{
 
v
a
l
:
 
0
 
}
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
l
a
y
o
u
t
 
=
 
l
a
y
o
u
t
T
r
e
e
(
r
,
 
c
h
i
l
d
r
e
n
,
 
0
,
 
x
O
f
f
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
o
d
e
M
a
p
:
 
R
e
c
o
r
d
<
n
u
m
b
e
r
,
 
T
r
e
e
L
a
y
o
u
t
>
 
=
 
{
}
;


 
 
 
 
 
 
 
 
 
 
l
a
y
o
u
t
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
l
)
 
=
>
 
{
 
n
o
d
e
M
a
p
[
l
.
i
d
]
 
=
 
l
;
 
}
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
X
 
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
l
a
y
o
u
t
.
m
a
p
(
(
l
)
 
=
>
 
l
.
x
)
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
Y
 
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
l
a
y
o
u
t
.
m
a
p
(
(
l
)
 
=
>
 
l
.
y
)
,
 
0
)
;


 
 
 
 
 
 
 
 
 
 
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
 
5
2
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
e
l
l
H
 
=
 
6
0
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
W
 
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
0
0
,
 
(
m
a
x
X
 
+
 
1
)
 
*
 
c
e
l
l
W
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
H
 
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
8
0
,
 
(
m
a
x
Y
 
+
 
1
)
 
*
 
c
e
l
l
H
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
l
o
r
 
=
 
c
o
l
o
r
B
y
R
o
o
t
[
r
]
;




 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
x
 
=
 
(
x
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
 
x
 
*
 
c
e
l
l
W
 
+
 
c
e
l
l
W
 
/
 
2
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
y
 
=
 
(
y
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
 
y
 
*
 
c
e
l
l
H
 
+
 
2
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
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
r
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
r
o
u
n
d
e
d
-
l
g
 
p
-
2
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
o
r
d
e
r
:
 
`
2
p
x
 
s
o
l
i
d
 
$
{
c
o
l
o
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
 
`
$
{
c
o
l
o
r
}
1
1
`
 
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
r
 
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
 
f
o
n
t
-
s
a
n
s
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
o
t
 
{
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
v
g
 
w
i
d
t
h
=
{
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
H
}
 
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
W
}
 
$
{
H
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
 
d
i
s
p
l
a
y
:
 
"
b
l
o
c
k
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
a
y
o
u
t
.
m
a
p
(
(
n
o
d
e
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
n
o
d
e
.
p
a
r
e
n
t
I
d
 
=
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
 
p
2
 
=
 
n
o
d
e
M
a
p
[
n
o
d
e
.
p
a
r
e
n
t
I
d
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
p
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
e
-
$
{
n
o
d
e
.
i
d
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
p
x
(
p
2
.
x
)
}
 
y
1
=
{
p
y
(
p
2
.
y
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
p
x
(
n
o
d
e
.
x
)
}
 
y
2
=
{
p
y
(
n
o
d
e
.
y
)
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
9
4
a
3
b
8
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
a
y
o
u
t
.
m
a
p
(
(
n
o
d
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
 
i
s
H
i
g
h
l
i
g
h
t
e
d
 
=
 
h
i
g
h
l
i
g
h
t
e
d
.
i
n
c
l
u
d
e
s
(
n
o
d
e
.
i
d
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
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
 
=
 
c
o
m
p
r
e
s
s
e
d
.
i
n
c
l
u
d
e
s
(
n
o
d
e
.
i
d
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
 
i
s
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
 
?
 
"
#
f
b
b
f
2
4
"
 
:
 
i
s
H
i
g
h
l
i
g
h
t
e
d
 
?
 
"
#
3
b
8
2
f
6
"
 
:
 
"
#
f
5
f
5
f
4
"
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
C
o
l
o
r
 
=
 
(
i
s
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
 
|
|
 
i
s
H
i
g
h
l
i
g
h
t
e
d
)
 
?
 
"
#
f
f
f
"
 
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
n
-
$
{
n
o
d
e
.
i
d
}
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
x
=
{
p
x
(
n
o
d
e
.
x
)
}
 
c
y
=
{
p
y
(
n
o
d
e
.
y
)
}
 
r
=
{
1
6
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
n
o
d
e
.
i
d
 
=
=
=
 
r
 
?
 
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
n
o
d
e
.
i
d
 
=
=
=
 
r
 
?
 
2
.
5
 
:
 
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
p
x
(
n
o
d
e
.
x
)
}
 
y
=
{
p
y
(
n
o
d
e
.
y
)
 
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
2
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
"
u
i
-
m
o
n
o
s
p
a
c
e
,
 
m
o
n
o
s
p
a
c
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
n
o
d
e
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
n
o
d
e
.
i
d
 
=
=
=
 
r
 
&
&
 
r
a
n
k
[
n
o
d
e
.
i
d
]
 
>
 
0
 
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
x
(
n
o
d
e
.
x
)
 
+
 
1
8
}
 
y
=
{
p
y
(
n
o
d
e
.
y
)
 
-
 
1
2
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
i
l
l
=
{
c
o
l
o
r
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
"
u
i
-
m
o
n
o
s
p
a
c
e
,
 
m
o
n
o
s
p
a
c
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
r
a
n
k
[
n
o
d
e
.
i
d
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
a
n
s
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
o
n
e
n
t
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
 
 
I
n
p
u
t
 
p
a
r
s
i
n
g
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
O
p
s
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
 
n
:
 
n
u
m
b
e
r
;
 
o
p
s
:
 
{
 
k
i
n
d
:
 
"
u
n
i
o
n
"
 
|
 
"
f
i
n
d
"
;
 
a
:
 
n
u
m
b
e
r
;
 
b
?
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
 
l
i
n
e
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
[
;
\
n
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
l
)
 
=
>
 
l
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
;


 
 
i
f
 
(
l
i
n
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
 
n
 
=
 
N
u
m
b
e
r
(
l
i
n
e
s
[
0
]
)
;


 
 
i
f
 
(
!
N
u
m
b
e
r
.
i
s
F
i
n
i
t
e
(
n
)
 
|
|
 
n
 
<
 
1
 
|
|
 
n
 
>
 
1
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
 
o
p
s
:
 
{
 
k
i
n
d
:
 
"
u
n
i
o
n
"
 
|
 
"
f
i
n
d
"
;
 
a
:
 
n
u
m
b
e
r
;
 
b
?
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
 
l
i
n
e
s
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
 
l
n
 
=
 
l
i
n
e
s
[
i
]
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
 
m
u
 
=
 
l
n
.
m
a
t
c
h
(
/
^
u
n
i
o
n
\
s
*
\
(
?
\
s
*
(
\
d
+
)
\
s
*
[
,
\
s
]
\
s
*
(
\
d
+
)
\
s
*
\
)
?
$
/
)
;


 
 
 
 
c
o
n
s
t
 
m
f
 
=
 
l
n
.
m
a
t
c
h
(
/
^
f
i
n
d
\
s
*
\
(
?
\
s
*
(
\
d
+
)
\
s
*
\
)
?
$
/
)
;


 
 
 
 
i
f
 
(
m
u
)
 
o
p
s
.
p
u
s
h
(
{
 
k
i
n
d
:
 
"
u
n
i
o
n
"
,
 
a
:
 
N
u
m
b
e
r
(
m
u
[
1
]
)
,
 
b
:
 
N
u
m
b
e
r
(
m
u
[
2
]
)
 
}
)
;


 
 
 
 
e
l
s
e
 
i
f
 
(
m
f
)
 
o
p
s
.
p
u
s
h
(
{
 
k
i
n
d
:
 
"
f
i
n
d
"
,
 
a
:
 
N
u
m
b
e
r
(
m
f
[
1
]
)
 
}
)
;


 
 
 
 
e
l
s
e
 
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


 
 
}


 
 
r
e
t
u
r
n
 
{
 
n
,
 
o
p
s
 
}
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
7
\
n
u
n
i
o
n
(
0
,
 
1
)
\
n
u
n
i
o
n
(
2
,
 
3
)
\
n
u
n
i
o
n
(
0
,
 
2
)
\
n
u
n
i
o
n
(
4
,
 
5
)
\
n
u
n
i
o
n
(
6
,
 
4
)
\
n
f
i
n
d
(
3
)
\
n
f
i
n
d
(
6
)
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
O
p
s
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
 
n
,
 
o
p
s
 
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
 
n
:
 
6
,
 
o
p
s
:
 
[
]
 
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
n
,
 
o
p
s
)
,
 
[
n
,
 
o
p
s
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
D
i
s
j
o
i
n
t
 
S
e
t
 
U
n
i
o
n
 
-
 
U
n
i
o
n
 
b
y
 
R
a
n
k
 
+
 
P
a
t
h
 
C
o
m
p
r
e
s
s
i
o
n
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
O
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
f
i
r
s
t
 
l
i
n
e
:
 
n
;
 
t
h
e
n
 
u
n
i
o
n
/
f
i
n
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
n
\
n
u
n
i
o
n
(
a
,
b
)
\
n
f
i
n
d
(
x
)
"


 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
S
e
m
i
c
o
l
o
n
 
o
r
 
n
e
w
l
i
n
e
 
s
e
p
a
r
a
t
e
d
.
 
1
 
<
=
 
n
 
<
=
 
1
2
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
h
a
i
n
"
,
 
v
a
l
u
e
:
 
"
6
\
n
u
n
i
o
n
(
0
,
1
)
\
n
u
n
i
o
n
(
1
,
2
)
\
n
u
n
i
o
n
(
2
,
3
)
\
n
u
n
i
o
n
(
3
,
4
)
\
n
f
i
n
d
(
0
)
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
C
o
m
p
r
e
s
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
5
\
n
u
n
i
o
n
(
0
,
1
)
\
n
u
n
i
o
n
(
2
,
3
)
\
n
u
n
i
o
n
(
1
,
3
)
\
n
f
i
n
d
(
0
)
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
D
i
s
j
o
i
n
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
8
\
n
u
n
i
o
n
(
0
,
1
)
\
n
u
n
i
o
n
(
2
,
3
)
\
n
u
n
i
o
n
(
4
,
5
)
\
n
u
n
i
o
n
(
6
,
7
)
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
a
m
e
 
r
o
o
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
4
\
n
u
n
i
o
n
(
0
,
1
)
\
n
u
n
i
o
n
(
1
,
2
)
\
n
u
n
i
o
n
(
0
,
2
)
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
O
p
s
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


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
F
o
r
e
s
t
 
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
 
/
>
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
 
n
o
d
e
 
b
e
i
n
g
 
v
i
s
i
t
e
d
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
a
m
b
e
r
-
4
0
0
"
>
p
a
t
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
 
j
u
s
t
 
r
e
-
p
o
i
n
t
e
d
 
(
p
a
t
h
 
c
o
m
p
r
e
s
s
i
o
n
)
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
c
o
l
o
r
e
d
 
b
o
r
d
e
r
 
=
 
d
i
s
t
i
n
c
t
 
c
o
m
p
o
n
e
n
t
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
 
p
r
o
b
l
e
m
"
,
 
b
o
d
y
:
 
"
G
i
v
e
n
 
n
 
i
t
e
m
s
,
 
s
u
p
p
o
r
t
 
t
w
o
 
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
 
f
a
s
t
:
 
u
n
i
o
n
(
x
,
 
y
)
 
m
e
r
g
e
s
 
t
h
e
 
g
r
o
u
p
s
 
o
f
 
x
 
a
n
d
 
y
;
 
f
i
n
d
(
x
)
 
r
e
t
u
r
n
s
 
a
 
c
a
n
o
n
i
c
a
l
 
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
v
e
 
(
r
o
o
t
)
 
o
f
 
x
'
s
 
g
r
o
u
p
.
 
T
w
o
 
e
l
e
m
e
n
t
s
 
a
r
e
 
i
n
 
t
h
e
 
s
a
m
e
 
s
e
t
 
i
f
f
 
f
i
n
d
(
x
)
 
=
 
f
i
n
d
(
y
)
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
T
r
e
e
s
 
i
n
 
d
i
s
g
u
i
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
E
a
c
h
 
s
e
t
 
i
s
 
s
t
o
r
e
d
 
a
s
 
a
 
t
r
e
e
.
 
E
v
e
r
y
 
e
l
e
m
e
n
t
 
p
o
i
n
t
s
 
t
o
 
i
t
s
 
p
a
r
e
n
t
;
 
t
h
e
 
r
o
o
t
 
p
o
i
n
t
s
 
t
o
 
i
t
s
e
l
f
.
 
E
l
e
m
e
n
t
s
 
n
e
v
e
r
 
m
o
v
e
;
 
o
n
l
y
 
t
h
e
 
p
a
r
e
n
t
 
p
o
i
n
t
e
r
 
c
h
a
n
g
e
s
.
 
T
w
o
 
o
p
t
i
m
i
s
a
t
i
o
n
s
 
k
e
e
p
 
t
r
e
e
s
 
n
e
a
r
-
f
l
a
t
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
n
i
o
n
 
b
y
 
r
a
n
k
"
,
 
b
o
d
y
:
 
"
R
a
n
k
 
i
s
 
a
p
p
r
o
x
i
m
a
t
e
l
y
 
t
r
e
e
 
h
e
i
g
h
t
.
 
A
t
t
a
c
h
 
t
h
e
 
s
h
o
r
t
e
r
 
t
r
e
e
 
u
n
d
e
r
 
t
h
e
 
t
a
l
l
e
r
 
o
n
e
 
s
o
 
h
e
i
g
h
t
 
g
r
o
w
s
 
a
t
 
m
o
s
t
 
b
y
 
1
 
w
h
e
n
 
r
a
n
k
s
 
t
i
e
.
 
P
r
e
v
e
n
t
s
 
p
a
t
h
o
l
o
g
i
c
a
l
 
c
h
a
i
n
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
P
a
t
h
 
c
o
m
p
r
e
s
s
i
o
n
"
,
 
b
o
d
y
:
 
"
D
u
r
i
n
g
 
f
i
n
d
(
x
)
,
 
a
f
t
e
r
 
w
e
 
r
e
a
c
h
 
t
h
e
 
r
o
o
t
 
r
,
 
r
e
-
p
o
i
n
t
 
e
v
e
r
y
 
n
o
d
e
 
o
n
 
t
h
e
 
w
a
l
k
e
d
 
p
a
t
h
 
d
i
r
e
c
t
l
y
 
t
o
 
r
.
 
N
e
x
t
 
f
i
n
d
 
o
n
 
a
n
y
 
o
f
 
t
h
e
m
 
i
s
 
O
(
1
)
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
A
m
o
r
t
i
z
e
d
 
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
"
,
 
b
o
d
y
:
 
"
W
i
t
h
 
b
o
t
h
 
t
r
i
c
k
s
,
 
m
 
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
 
o
n
 
n
 
e
l
e
m
e
n
t
s
 
r
u
n
 
i
n
 
O
(
m
 
x
 
a
l
p
h
a
(
n
)
)
,
 
w
h
e
r
e
 
a
l
p
h
a
 
i
s
 
t
h
e
 
i
n
v
e
r
s
e
 
A
c
k
e
r
m
a
n
n
 
f
u
n
c
t
i
o
n
,
 
e
f
f
e
c
t
i
v
e
l
y
 
<
=
 
4
 
f
o
r
 
a
n
y
 
n
 
i
n
 
t
h
e
 
u
n
i
v
e
r
s
e
.
 
T
r
e
a
t
 
i
t
 
a
s
 
O
(
1
)
 
p
e
r
 
o
p
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
W
h
e
r
e
 
i
t
 
a
p
p
e
a
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
K
r
u
s
k
a
l
'
s
 
M
S
T
 
(
d
e
t
e
c
t
 
c
y
c
l
e
s
 
w
h
e
n
 
a
d
d
i
n
g
 
e
d
g
e
s
)
,
 
c
o
n
n
e
c
t
e
d
 
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
 
i
n
 
a
 
d
y
n
a
m
i
c
 
g
r
a
p
h
,
 
o
f
f
l
i
n
e
 
L
C
A
,
 
U
n
i
o
n
-
F
i
n
d
 
o
n
 
g
r
i
d
s
,
 
a
n
d
 
m
a
n
y
 
i
n
t
e
r
v
i
e
w
 
q
u
e
s
t
i
o
n
s
 
o
n
 
e
q
u
i
v
a
l
e
n
c
e
 
c
l
a
s
s
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
F
o
r
e
s
t
 
o
f
 
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
M
e
n
t
a
l
 
m
o
d
e
l
:
 
e
a
c
h
 
s
e
t
 
i
s
 
a
 
t
r
e
e
,
 
r
o
o
t
 
i
s
 
t
h
e
 
n
a
m
e
 
t
a
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
 
D
S
U
 
i
s
 
a
 
f
o
r
e
s
t
.
 
E
a
c
h
 
t
r
e
e
 
i
s
 
a
 
s
e
t
.
 
T
h
e
 
r
o
o
t
 
i
s
 
t
h
e
 
s
e
t
&
r
s
q
u
o
;
s
 
n
a
m
e
 
t
a
g
.
 
U
n
i
o
n
 
g
l
u
e
s
 
t
w
o


 
 
 
 
 
 
 
 
 
 
t
r
e
e
s
 
b
y
 
a
t
t
a
c
h
i
n
g
 
t
h
e
 
s
h
o
r
t
e
r
 
r
o
o
t
 
u
n
d
e
r
 
t
h
e
 
t
a
l
l
e
r
.
 
F
i
n
d
 
w
a
l
k
s
 
u
p
 
t
o
 
t
h
e
 
r
o
o
t
,
 
t
h
e
n


 
 
 
 
 
 
 
 
 
 
f
l
a
t
t
e
n
s
 
t
h
e
 
p
a
t
h
 
f
o
r
 
f
u
t
u
r
e
 
q
u
e
r
i
e
s
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
S
t
a
r
t
 
w
i
t
h
 
n
 
=
 
5
.
 
A
f
t
e
r
 
u
n
i
o
n
(
0
,
1
)
,
 
u
n
i
o
n
(
2
,
3
)
,
 
u
n
i
o
n
(
0
,
3
)
.
 
H
o
w
 
m
a
n
y
 
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


 
 
 
 
{
 
q
:
 
"
n
 
=
 
4
,
 
a
l
l
 
r
a
n
k
s
 
0
.
 
A
f
t
e
r
 
u
n
i
o
n
(
0
,
1
)
 
t
h
e
n
 
u
n
i
o
n
(
2
,
3
)
 
t
h
e
n
 
u
n
i
o
n
(
0
,
2
)
,
 
w
h
a
t
 
i
s
 
r
a
n
k
 
o
f
 
t
h
e
 
f
i
n
a
l
 
r
o
o
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


 
 
 
 
{
 
q
:
 
"
A
f
t
e
r
 
c
a
l
l
i
n
g
 
f
i
n
d
(
x
)
 
w
i
t
h
 
p
a
t
h
 
c
o
m
p
r
e
s
s
i
o
n
 
o
n
 
a
 
c
h
a
i
n
 
4
-
>
3
-
>
2
-
>
1
-
>
0
,
 
w
h
a
t
 
i
s
 
p
a
r
e
n
t
[
3
]
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
0
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


 
 
 
 
 
 
 
 
W
o
r
k
 
o
u
t
 
e
a
c
h
 
s
c
e
n
a
r
i
o
 
o
n
 
p
a
p
e
r
 
(
d
r
a
w
 
t
h
e
 
f
o
r
e
s
t
!
)
 
t
h
e
n
 
r
e
v
e
a
l
.
 
T
h
e
s
e
 
a
r
e
 
c
l
a
s
s
i
c
 
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
s
t
y
l
e
 
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
.
t
r
i
m
(
)
 
=
=
=
 
p
.
a
n
s
w
e
r
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
2
8
 
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
 
t
w
o
 
t
r
i
c
k
s
,
 
n
o
t
 
o
n
e
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


 
 
 
 
 
 
 
 
 
 
U
n
i
o
n
-
b
y
-
r
a
n
k
 
a
l
o
n
e
 
g
i
v
e
s
 
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
 
P
a
t
h
 
c
o
m
p
r
e
s
s
i
o
n
 
a
l
o
n
e
 
g
i
v
e
s
 
O
(
l
o
g
 
n
)
 
a
m
o
r
t
i
z
e
d
.


 
 
 
 
 
 
 
 
 
 
T
o
g
e
t
h
e
r
 
t
h
e
 
p
r
o
v
e
d
 
b
o
u
n
d
 
i
s
 
O
(
a
l
p
h
a
(
n
)
)
,
 
w
h
i
c
h
 
i
s
 
a
 
s
l
o
w
l
y
 
g
r
o
w
i
n
g
 
f
u
n
c
t
i
o
n
 
&
l
t
;
=
 
4
 
f
o
r
 
n
 
b
e
l
o
w


 
 
 
 
 
 
 
 
 
 
t
h
e
 
n
u
m
b
e
r
 
o
f
 
a
t
o
m
s
 
i
n
 
t
h
e
 
o
b
s
e
r
v
a
b
l
e
 
u
n
i
v
e
r
s
e
.
 
E
f
f
e
c
t
i
v
e
l
y
 
c
o
n
s
t
a
n
t
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
R
a
n
k
 
i
s
 
N
O
T
 
s
i
z
e
.
 
R
a
n
k
 
o
n
l
y
 
c
h
a
n
g
e
s
 
w
h
e
n
 
b
o
t
h
 
t
r
e
e
s
 
b
e
i
n
g
 
u
n
i
o
n
e
d
 
h
a
d
 
e
q
u
a
l
 
r
a
n
k
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
 
u
n
i
o
n
,
 
t
h
e
 
s
m
a
l
l
e
r
 
t
r
e
e
&
r
s
q
u
o
;
s
 
r
o
o
t
&
r
s
q
u
o
;
s
 
r
a
n
k
 
i
s
 
u
n
c
h
a
n
g
e
d
.
 
O
n
l
y
 
t
h
e
 
w
i
n
n
i
n
g
 
r
o
o
t
&
r
s
q
u
o
;
s
 
r
a
n
k
 
m
a
y
 
i
n
c
r
e
m
e
n
t
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
P
a
t
h
 
c
o
m
p
r
e
s
s
i
o
n
 
m
o
d
i
f
i
e
s
 
p
a
r
e
n
t
 
p
o
i
n
t
e
r
s
 
b
u
t
 
n
e
v
e
r
 
r
a
n
k
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
C
o
m
p
o
n
e
n
t
s
 
c
o
u
n
t
 
d
e
c
r
e
a
s
e
s
 
b
y
 
1
 
p
e
r
 
s
u
c
c
e
s
s
f
u
l
 
u
n
i
o
n
,
 
n
o
t
 
p
e
r
 
c
a
l
l
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
D
S
U
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
i
t
h
 
u
n
i
o
n
-
b
y
-
r
a
n
k
 
+
 
p
a
t
h
 
c
o
m
p
r
e
s
s
i
o
n
,
 
t
h
e
 
a
m
o
r
t
i
z
e
d
 
c
o
s
t
 
o
f
 
m
 
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
 
o
n
 
n
 
e
l
e
m
e
n
t
s
 
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
m
 
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
m
 
·
 
α
(
n
)
)
"
,
 
"
O
(
m
 
√
n
)
"
,
 
"
O
(
m
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
T
a
r
j
a
n
'
s
 
c
l
a
s
s
i
c
 
r
e
s
u
l
t
:
 
O
(
m
 
·
 
α
(
n
)
)
 
w
h
e
r
e
 
α
 
i
s
 
t
h
e
 
i
n
v
e
r
s
e
 
A
c
k
e
r
m
a
n
n
 
f
u
n
c
t
i
o
n
,
 
e
f
f
e
c
t
i
v
e
l
y
 
<
=
 
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
I
n
 
u
n
i
o
n
-
b
y
-
r
a
n
k
,
 
w
h
e
n
 
i
s
 
t
h
e
 
r
a
n
k
 
o
f
 
t
h
e
 
c
o
m
b
i
n
e
d
 
r
o
o
t
 
i
n
c
r
e
m
e
n
t
e
d
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
A
l
w
a
y
s
"
,
 
"
W
h
e
n
 
b
o
t
h
 
r
o
o
t
s
 
h
a
d
 
e
q
u
a
l
 
r
a
n
k
"
,
 
"
W
h
e
n
 
o
n
e
 
r
a
n
k
 
w
a
s
 
0
"
,
 
"
N
e
v
e
r
,
 
o
n
l
y
 
p
a
t
h
 
c
o
m
p
r
e
s
s
i
o
n
 
c
h
a
n
g
e
s
 
r
a
n
k
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
R
a
n
k
 
o
n
l
y
 
g
r
o
w
s
 
w
h
e
n
 
t
w
o
 
e
q
u
a
l
-
r
a
n
k
 
t
r
e
e
s
 
m
e
r
g
e
.
 
O
t
h
e
r
w
i
s
e
 
t
h
e
 
t
a
l
l
e
r
 
a
b
s
o
r
b
s
 
t
h
e
 
s
h
o
r
t
e
r
 
w
i
t
h
o
u
t
 
c
h
a
n
g
i
n
g
 
h
e
i
g
h
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
S
t
a
r
t
 
w
i
t
h
 
p
a
r
e
n
t
 
=
 
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
]
.
 
A
f
t
e
r
 
u
n
i
o
n
(
0
,
1
)
,
 
u
n
i
o
n
(
2
,
3
)
,
 
u
n
i
o
n
(
0
,
2
)
 
(
a
l
l
 
r
a
n
k
s
 
s
t
a
r
t
 
0
,
 
u
n
i
o
n
-
b
y
-
r
a
n
k
)
,
 
w
h
a
t
 
i
s
 
p
a
r
e
n
t
[
3
]
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
0
"
,
 
"
2
"
,
 
"
3
"
,
 
"
1
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
u
n
i
o
n
(
0
,
1
)
:
 
r
a
n
k
[
0
]
=
1
,
 
p
a
r
e
n
t
[
1
]
=
0
.
 
u
n
i
o
n
(
2
,
3
)
:
 
r
a
n
k
[
2
]
=
1
,
 
p
a
r
e
n
t
[
3
]
=
2
.
 
u
n
i
o
n
(
0
,
2
)
:
 
r
a
n
k
s
 
e
q
u
a
l
 
(
1
,
1
)
 
-
 
a
t
t
a
c
h
 
r
o
o
t
 
2
 
u
n
d
e
r
 
0
;
 
p
a
r
e
n
t
[
2
]
=
0
.
 
p
a
r
e
n
t
[
3
]
 
w
a
s
 
s
e
t
 
t
o
 
2
 
e
a
r
l
i
e
r
 
a
n
d
 
u
n
c
h
a
n
g
e
d
 
u
n
t
i
l
 
a
 
f
i
n
d
;
 
i
t
 
i
s
 
2
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
a
t
 
d
o
e
s
 
p
a
t
h
 
c
o
m
p
r
e
s
s
i
o
n
 
m
o
d
i
f
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
O
n
l
y
 
t
h
e
 
r
a
n
k
 
a
r
r
a
y
"
,
 
"
T
h
e
 
p
a
r
e
n
t
 
a
r
r
a
y
,
 
p
o
i
n
t
i
n
g
 
e
v
e
r
y
 
n
o
d
e
 
o
n
 
t
h
e
 
f
i
n
d
 
p
a
t
h
 
t
o
 
t
h
e
 
r
o
o
t
"
,
 
"
B
o
t
h
 
r
a
n
k
 
a
n
d
 
p
a
r
e
n
t
"
,
 
"
T
h
e
 
c
o
m
p
o
n
e
n
t
 
c
o
u
n
t
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
P
a
t
h
 
c
o
m
p
r
e
s
s
i
o
n
 
r
e
-
p
o
i
n
t
s
 
p
a
r
e
n
t
 
p
o
i
n
t
e
r
s
 
a
l
o
n
g
 
t
h
e
 
t
r
a
v
e
r
s
e
d
 
p
a
t
h
 
d
i
r
e
c
t
l
y
 
t
o
 
t
h
e
 
r
o
o
t
;
 
r
a
n
k
 
i
s
 
u
n
a
f
f
e
c
t
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
D
i
s
j
o
i
n
t
 
S
e
t
 
U
n
i
o
n
 
(
U
n
i
o
n
-
F
i
n
d
)
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
2
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
 
K
r
u
s
k
a
l
'
s
 
M
S
T
,
 
c
o
n
n
e
c
t
i
v
i
t
y
,
 
e
q
u
i
v
a
l
e
n
c
e
 
g
r
o
u
p
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
A
d
v
a
n
c
e
d
 
D
a
t
a
 
S
t
r
u
c
t
u
r
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


