
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


 
 
C
o
d
e
B
l
o
c
k
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
b
i
n
a
r
y
-
s
e
a
r
c
h
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
f
u
n
c
t
i
o
n
 
m
i
n
C
a
p
a
c
i
t
y
(
p
k
g
s
,
 
D
)
:
"
,


 
 
"
 
 
l
o
 
=
 
m
a
x
(
p
k
g
s
)
;
 
h
i
 
=
 
s
u
m
(
p
k
g
s
)
"
,


 
 
"
 
 
w
h
i
l
e
 
l
o
 
<
 
h
i
:
"
,


 
 
"
 
 
 
 
m
i
d
 
=
 
(
l
o
 
+
 
h
i
)
 
/
/
 
2
"
,


 
 
"
 
 
 
 
i
f
 
c
a
n
S
h
i
p
(
p
k
g
s
,
 
D
,
 
m
i
d
)
:
"
,


 
 
"
 
 
 
 
 
 
h
i
 
=
 
m
i
d
 
 
 
 
 
/
/
 
f
e
a
s
i
b
l
e
 
-
 
t
r
y
 
s
m
a
l
l
e
r
"
,


 
 
"
 
 
 
 
e
l
s
e
:
"
,


 
 
"
 
 
 
 
 
 
l
o
 
=
 
m
i
d
 
+
 
1
 
/
/
 
i
n
f
e
a
s
i
b
l
e
 
-
 
n
e
e
d
 
l
a
r
g
e
r
"
,


 
 
"
 
 
r
e
t
u
r
n
 
l
o
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
 
L
o
a
d
S
t
e
p
 
{
 
d
a
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
a
p
:
 
n
u
m
b
e
r
;
 
u
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
;
 
p
k
g
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


 
 
m
i
d
:
 
n
u
m
b
e
r
 
|
 
n
u
l
l
;


 
 
f
e
a
s
i
b
l
e
:
 
b
o
o
l
e
a
n
 
|
 
n
u
l
l
;


 
 
l
o
a
d
S
t
e
p
s
:
 
L
o
a
d
S
t
e
p
[
]
;


 
 
b
e
s
t
:
 
n
u
m
b
e
r
 
|
 
n
u
l
l
;


 
 
f
l
a
s
h
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
 
s
i
m
u
l
a
t
e
S
h
i
p
(
p
k
g
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
,
 
D
:
 
n
u
m
b
e
r
,
 
c
a
p
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
 
o
k
:
 
b
o
o
l
e
a
n
;
 
s
t
e
p
s
:
 
L
o
a
d
S
t
e
p
[
]
 
}
 
{


 
 
c
o
n
s
t
 
s
t
e
p
s
:
 
L
o
a
d
S
t
e
p
[
]
 
=
 
[
]
;


 
 
l
e
t
 
d
a
y
 
=
 
1
;
 
l
e
t
 
u
s
e
d
 
=
 
0
;
 
l
e
t
 
b
u
c
k
e
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
 
p
 
o
f
 
p
k
g
s
)
 
{


 
 
 
 
i
f
 
(
p
 
>
 
c
a
p
)
 
r
e
t
u
r
n
 
{
 
o
k
:
 
f
a
l
s
e
,
 
s
t
e
p
s
:
 
[
{
 
d
a
y
,
 
c
a
p
,
 
u
s
e
d
,
 
p
k
g
s
:
 
[
.
.
.
b
u
c
k
e
t
]
 
}
]
 
}
;


 
 
 
 
i
f
 
(
u
s
e
d
 
+
 
p
 
>
 
c
a
p
)
 
{
 
s
t
e
p
s
.
p
u
s
h
(
{
 
d
a
y
,
 
c
a
p
,
 
u
s
e
d
,
 
p
k
g
s
:
 
[
.
.
.
b
u
c
k
e
t
]
 
}
)
;
 
d
a
y
+
+
;
 
u
s
e
d
 
=
 
0
;
 
b
u
c
k
e
t
 
=
 
[
]
;
 
}


 
 
 
 
u
s
e
d
 
+
=
 
p
;
 
b
u
c
k
e
t
.
p
u
s
h
(
p
)
;


 
 
}


 
 
s
t
e
p
s
.
p
u
s
h
(
{
 
d
a
y
,
 
c
a
p
,
 
u
s
e
d
,
 
p
k
g
s
:
 
[
.
.
.
b
u
c
k
e
t
]
 
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
 
o
k
:
 
d
a
y
 
<
=
 
D
,
 
s
t
e
p
s
 
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
p
k
g
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
,
 
D
:
 
n
u
m
b
e
r
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


 
 
i
f
 
(
p
k
g
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


 
 
 
 
f
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
 
"
N
o
 
p
a
c
k
a
g
e
s
.
"
,
 
l
o
:
 
0
,
 
h
i
:
 
0
,
 
m
i
d
:
 
n
u
l
l
,
 
f
e
a
s
i
b
l
e
:
 
n
u
l
l
,
 
l
o
a
d
S
t
e
p
s
:
 
[
]
,
 
b
e
s
t
:
 
n
u
l
l
 
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
;


 
 
}


 
 
c
o
n
s
t
 
h
i
M
a
x
 
=
 
p
k
g
s
.
r
e
d
u
c
e
(
(
a
,
 
b
)
 
=
>
 
a
 
+
 
b
,
 
0
)
;


 
 
c
o
n
s
t
 
l
o
M
i
n
 
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
p
k
g
s
)
;


 
 
l
e
t
 
l
o
 
=
 
l
o
M
i
n
;
 
l
e
t
 
h
i
 
=
 
h
i
M
a
x
;
 
l
e
t
 
b
e
s
t
:
 
n
u
m
b
e
r
 
|
 
n
u
l
l
 
=
 
n
u
l
l
;




 
 
f
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
 
p
k
g
s
:
 
`
[
$
{
p
k
g
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
`
,
 
D
 
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
h
i
p
 
$
{
p
k
g
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
a
c
k
a
g
e
s
 
i
n
 
$
{
D
}
 
d
a
y
s
.
 
F
i
n
d
 
t
h
e
 
s
m
a
l
l
e
s
t
 
c
a
p
a
c
i
t
y
.
`
,
 
l
o
,
 
h
i
,
 
m
i
d
:
 
n
u
l
l
,
 
f
e
a
s
i
b
l
e
:
 
n
u
l
l
,
 
l
o
a
d
S
t
e
p
s
:
 
[
]
,
 
b
e
s
t
:
 
n
u
l
l
 
}
)
;


 
 
f
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
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
h
i
"
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
 
s
p
a
c
e
:
 
[
l
o
=
$
{
l
o
}
 
(
m
a
x
 
p
k
g
)
,
 
h
i
=
$
{
h
i
}
 
(
s
u
m
 
o
f
 
p
k
g
s
)
]
.
`
,
 
l
o
,
 
h
i
,
 
m
i
d
:
 
n
u
l
l
,
 
f
e
a
s
i
b
l
e
:
 
n
u
l
l
,
 
l
o
a
d
S
t
e
p
s
:
 
[
]
,
 
b
e
s
t
:
 
n
u
l
l
 
}
)
;




 
 
l
e
t
 
g
u
a
r
d
 
=
 
0
;


 
 
w
h
i
l
e
 
(
l
o
 
<
 
h
i
 
&
&
 
g
u
a
r
d
+
+
 
<
 
4
0
)
 
{


 
 
 
 
f
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
 
l
o
,
 
h
i
 
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
l
o
=
$
{
l
o
}
 
<
 
h
i
=
$
{
h
i
}
 
-
 
k
e
e
p
 
s
e
a
r
c
h
i
n
g
.
`
,
 
l
o
,
 
h
i
,
 
m
i
d
:
 
n
u
l
l
,
 
f
e
a
s
i
b
l
e
:
 
n
u
l
l
,
 
l
o
a
d
S
t
e
p
s
:
 
[
]
,
 
b
e
s
t
 
}
)
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


 
 
 
 
f
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
 
m
i
d
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
m
i
d
"
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
m
i
d
 
=
 
(
$
{
l
o
}
+
$
{
h
i
}
)
/
2
 
=
 
$
{
m
i
d
}
.
 
T
e
s
t
 
c
a
p
a
c
i
t
y
 
$
{
m
i
d
}
.
`
,
 
l
o
,
 
h
i
,
 
m
i
d
,
 
f
e
a
s
i
b
l
e
:
 
n
u
l
l
,
 
l
o
a
d
S
t
e
p
s
:
 
[
]
,
 
b
e
s
t
 
}
)
;


 
 
 
 
c
o
n
s
t
 
s
i
m
 
=
 
s
i
m
u
l
a
t
e
S
h
i
p
(
p
k
g
s
,
 
D
,
 
m
i
d
)
;


 
 
 
 
f
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
 
m
i
d
,
 
f
e
a
s
i
b
l
e
:
 
s
i
m
.
o
k
 
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
,
 
d
a
y
s
U
s
e
d
:
 
s
i
m
.
s
t
e
p
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


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
s
i
m
.
o
k
 
?
 
`
c
a
n
S
h
i
p
(
c
a
p
=
$
{
m
i
d
}
)
 
u
s
e
s
 
$
{
s
i
m
.
s
t
e
p
s
.
l
e
n
g
t
h
}
 
d
a
y
s
 
(
<
=
 
$
{
D
}
)
 
-
 
f
e
a
s
i
b
l
e
`
 
:
 
`
c
a
n
S
h
i
p
(
c
a
p
=
$
{
m
i
d
}
)
 
u
s
e
s
 
$
{
s
i
m
.
s
t
e
p
s
.
l
e
n
g
t
h
}
 
d
a
y
s
 
(
>
 
$
{
D
}
)
 
-
 
i
n
f
e
a
s
i
b
l
e
`
,


 
 
 
 
 
 
l
o
,
 
h
i
,
 
m
i
d
,
 
f
e
a
s
i
b
l
e
:
 
s
i
m
.
o
k
,
 
l
o
a
d
S
t
e
p
s
:
 
s
i
m
.
s
t
e
p
s
,
 
b
e
s
t
,


 
 
 
 
}
)
;


 
 
 
 
i
f
 
(
s
i
m
.
o
k
)
 
{


 
 
 
 
 
 
h
i
 
=
 
m
i
d
;
 
b
e
s
t
 
=
 
m
i
d
;


 
 
 
 
 
 
f
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
 
h
i
,
 
b
e
s
t
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
h
i
"
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
e
a
s
i
b
l
e
 
-
 
t
r
y
 
s
m
a
l
l
e
r
.
 
h
i
 
=
 
$
{
m
i
d
}
.
`
,
 
l
o
,
 
h
i
,
 
m
i
d
,
 
f
e
a
s
i
b
l
e
:
 
t
r
u
e
,
 
l
o
a
d
S
t
e
p
s
:
 
s
i
m
.
s
t
e
p
s
,
 
b
e
s
t
 
}
)
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
l
o
 
=
 
m
i
d
 
+
 
1
;


 
 
 
 
 
 
f
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
 
l
o
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
l
o
"
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
f
e
a
s
i
b
l
e
 
-
 
n
e
e
d
 
b
i
g
g
e
r
.
 
l
o
 
=
 
$
{
m
i
d
 
+
 
1
}
.
`
,
 
l
o
,
 
h
i
,
 
m
i
d
,
 
f
e
a
s
i
b
l
e
:
 
f
a
l
s
e
,
 
l
o
a
d
S
t
e
p
s
:
 
s
i
m
.
s
t
e
p
s
,
 
b
e
s
t
 
}
)
;


 
 
 
 
}


 
 
}


 
 
f
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
 
a
n
s
w
e
r
:
 
l
o
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
a
n
s
w
e
r
"
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
m
a
l
l
e
s
t
 
f
e
a
s
i
b
l
e
 
c
a
p
a
c
i
t
y
 
=
 
$
{
l
o
}
.
`
,
 
l
o
,
 
h
i
,
 
m
i
d
:
 
n
u
l
l
,
 
f
e
a
s
i
b
l
e
:
 
n
u
l
l
,
 
l
o
a
d
S
t
e
p
s
:
 
[
]
,
 
b
e
s
t
:
 
l
o
 
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
 
p
a
r
s
e
I
n
p
u
t
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
 
p
k
g
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
 
D
:
 
n
u
m
b
e
r
 
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
"
|
"
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
 
p
k
g
s
 
=
 
p
a
r
t
s
[
0
]
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
N
u
m
b
e
r
)
.
f
i
l
t
e
r
(
(
x
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
F
i
n
i
t
e
(
x
)
 
&
&
 
x
 
>
 
0
)
;


 
 
c
o
n
s
t
 
D
 
=
 
N
u
m
b
e
r
(
p
a
r
t
s
[
1
]
.
t
r
i
m
(
)
)
;


 
 
i
f
 
(
!
p
k
g
s
.
l
e
n
g
t
h
 
|
|
 
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
D
)
 
|
|
 
D
 
<
 
1
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
 
p
k
g
s
,
 
D
 
}
;


}




/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
@
t
y
p
e
s
c
r
i
p
t
-
e
s
l
i
n
t
/
n
o
-
u
n
u
s
e
d
-
v
a
r
s


f
u
n
c
t
i
o
n
 
B
i
n
a
r
y
S
e
a
r
c
h
A
n
s
w
e
r
V
i
z
(
{
 
f
r
a
m
e
,
 
p
k
g
s
,
 
D
:
 
_
D
 
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
 
p
k
g
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
 
D
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
 
t
o
t
a
l
L
o
 
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
p
k
g
s
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
H
i
 
=
 
p
k
g
s
.
r
e
d
u
c
e
(
(
a
,
 
b
)
 
=
>
 
a
 
+
 
b
,
 
0
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
g
e
 
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
,
 
t
o
t
a
l
H
i
 
-
 
t
o
t
a
l
L
o
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
5
"
>


 
 
 
 
 
 
{
/
*
 
N
u
m
b
e
r
 
l
i
n
e
 
*
/
}


 
 
 
 
 
 
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
A
n
s
w
e
r
 
S
p
a
c
e
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
e
l
a
t
i
v
e
 
h
-
1
6
 
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
x
-
4
 
p
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
b
a
s
e
 
l
i
n
e
 
*
/
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
a
b
s
o
l
u
t
e
 
l
e
f
t
-
4
 
r
i
g
h
t
-
4
 
t
o
p
-
1
/
2
 
h
-
1
 
b
g
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
g
-
s
t
o
n
e
-
7
0
0
 
r
o
u
n
d
e
d
"
 
/
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
a
c
t
i
v
e
 
b
a
n
d
 
*
/
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
a
b
s
o
l
u
t
e
 
t
o
p
-
1
/
2
 
h
-
1
 
r
o
u
n
d
e
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
f
t
:
 
`
c
a
l
c
(
1
r
e
m
 
+
 
(
1
0
0
%
 
-
 
2
r
e
m
)
 
*
 
$
{
(
f
r
a
m
e
.
l
o
 
-
 
t
o
t
a
l
L
o
)
 
/
 
r
a
n
g
e
}
)
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
`
c
a
l
c
(
(
1
0
0
%
 
-
 
2
r
e
m
)
 
*
 
$
{
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
 
(
f
r
a
m
e
.
h
i
 
-
 
f
r
a
m
e
.
l
o
)
 
/
 
r
a
n
g
e
)
}
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
a
l
l
 
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


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
l
o
 
l
a
b
e
l
 
*
/
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
a
b
s
o
l
u
t
e
 
t
o
p
-
1
 
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
7
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
 
`
c
a
l
c
(
1
r
e
m
 
+
 
(
1
0
0
%
 
-
 
2
r
e
m
)
 
*
 
$
{
(
f
r
a
m
e
.
l
o
 
-
 
t
o
t
a
l
L
o
)
 
/
 
r
a
n
g
e
}
 
-
 
1
4
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
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
l
o
=
{
f
r
a
m
e
.
l
o
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
h
i
 
l
a
b
e
l
 
*
/
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
a
b
s
o
l
u
t
e
 
b
o
t
t
o
m
-
1
 
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
r
o
s
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
r
o
s
e
-
4
0
0
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
 
`
c
a
l
c
(
1
r
e
m
 
+
 
(
1
0
0
%
 
-
 
2
r
e
m
)
 
*
 
$
{
(
f
r
a
m
e
.
h
i
 
-
 
t
o
t
a
l
L
o
)
 
/
 
r
a
n
g
e
}
 
-
 
1
4
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
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
h
i
=
{
f
r
a
m
e
.
h
i
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
m
i
d
 
m
a
r
k
e
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
m
i
d
 
!
=
=
 
n
u
l
l
 
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
a
b
s
o
l
u
t
e
 
t
o
p
-
0
.
5
 
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
a
m
b
e
r
-
7
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
 
`
c
a
l
c
(
1
r
e
m
 
+
 
(
1
0
0
%
 
-
 
2
r
e
m
)
 
*
 
$
{
(
f
r
a
m
e
.
m
i
d
 
-
 
t
o
t
a
l
L
o
)
 
/
 
r
a
n
g
e
}
 
-
 
1
6
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
i
d
=
{
f
r
a
m
e
.
m
i
d
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
a
b
s
o
l
u
t
e
 
l
e
f
t
-
4
 
b
o
t
t
o
m
-
0
.
5
 
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
t
o
t
a
l
L
o
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
a
b
s
o
l
u
t
e
 
r
i
g
h
t
-
4
 
b
o
t
t
o
m
-
0
.
5
 
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
t
o
t
a
l
H
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
 
m
t
-
1
"
>
F
e
a
s
i
b
l
e
 
c
a
p
a
c
i
t
i
e
s
 
f
o
r
m
 
a
 
s
u
f
f
i
x
,
 
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
 
f
i
n
d
s
 
t
h
e
 
b
o
u
n
d
a
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




 
 
 
 
 
 
{
/
*
 
F
e
a
s
i
b
i
l
i
t
y
 
c
h
e
c
k
 
*
/
}


 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
F
e
a
s
i
b
i
l
i
t
y
 
c
h
e
c
k
{
f
r
a
m
e
.
m
i
d
 
!
=
=
 
n
u
l
l
 
?
 
`
,
 
c
a
p
=
$
{
f
r
a
m
e
.
m
i
d
}
`
 
:
 
"
"
}


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
f
e
a
s
i
b
l
e
 
=
=
=
 
t
r
u
e
 
&
&
 
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
l
i
m
e
-
7
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
>
f
e
a
s
i
b
l
e
<
/
s
p
a
n
>
}


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
f
e
a
s
i
b
l
e
 
=
=
=
 
f
a
l
s
e
 
&
&
 
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
r
o
s
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
r
o
s
e
-
4
0
0
 
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
>
i
n
f
e
a
s
i
b
l
e
<
/
s
p
a
n
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
 
g
a
p
-
2
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
 
m
i
n
-
h
-
1
6
 
p
-
3
 
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
"
>


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
l
o
a
d
S
t
e
p
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
 
?
 
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
 
i
t
a
l
i
c
"
>
W
a
i
t
i
n
g
 
f
o
r
 
a
 
m
i
d
 
t
o
 
t
e
s
t
.
.
.
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
f
r
a
m
e
.
l
o
a
d
S
t
e
p
s
.
m
a
p
(
(
s
t
e
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
 
p
c
t
 
=
 
(
s
t
e
p
.
u
s
e
d
 
/
 
s
t
e
p
.
c
a
p
)
 
*
 
1
0
0
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
o
v
e
r
 
=
 
s
t
e
p
.
u
s
e
d
 
>
 
s
t
e
p
.
c
a
p
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
m
i
n
-
w
-
2
8
 
p
-
2
 
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
o
v
e
r
 
?
 
"
#
d
c
2
6
2
6
"
 
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
 
o
v
e
r
 
?
 
"
#
f
e
e
2
e
2
"
 
:
 
"
#
f
7
f
e
e
7
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
1
.
5
"
>
D
a
y
 
{
s
t
e
p
.
d
a
y
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
r
e
l
a
t
i
v
e
 
h
-
2
 
r
o
u
n
d
e
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
2
0
0
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
m
b
-
1
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
a
b
s
o
l
u
t
e
 
l
e
f
t
-
0
 
t
o
p
-
0
 
b
o
t
t
o
m
-
0
 
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
 
`
$
{
M
a
t
h
.
m
i
n
(
1
0
0
,
 
p
c
t
)
}
%
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
 
o
v
e
r
 
?
 
"
#
d
c
2
6
2
6
"
 
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
{
s
t
e
p
.
u
s
e
d
}
/
{
s
t
e
p
.
c
a
p
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
7
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
3
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
[
{
s
t
e
p
.
p
k
g
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
f
r
a
m
e
.
b
e
s
t
 
!
=
=
 
n
u
l
l
 
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
p
x
-
4
 
p
y
-
2
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
7
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
3
0
0
"
>


 
 
 
 
 
 
 
 
 
 
B
e
s
t
 
f
e
a
s
i
b
l
e
 
c
a
p
a
c
i
t
y
 
s
o
 
f
a
r
:
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
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
7
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
"
>
{
f
r
a
m
e
.
b
e
s
t
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


 
 
 
 
 
 
)
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
.
m
e
s
s
a
g
e
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
i
n
p
u
t
S
t
r
,
 
s
e
t
I
n
p
u
t
S
t
r
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
,
9
,
1
0
 
|
 
5
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
I
n
p
u
t
(
i
n
p
u
t
S
t
r
)
 
?
?
 
{
 
p
k
g
s
:
 
[
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
,
 
9
,
 
1
0
]
,
 
D
:
 
5
 
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
p
a
r
s
e
d
.
p
k
g
s
,
 
p
a
r
s
e
d
.
D
)
,
 
[
p
a
r
s
e
d
.
p
k
g
s
,
 
p
a
r
s
e
d
.
D
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
C
a
p
a
c
i
t
y
 
t
o
 
S
h
i
p
 
P
a
c
k
a
g
e
s
,
 
B
i
n
a
r
y
 
S
e
a
r
c
h
 
o
n
 
A
n
s
w
e
r
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
p
a
c
k
a
g
e
s
 
|
 
d
a
y
s
 
 
(
e
.
g
.
 
1
,
2
,
3
,
4
,
5
 
|
 
3
)
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
S
t
r
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
,
9
,
1
0
 
|
 
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
C
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
 
p
a
c
k
a
g
e
 
w
e
i
g
h
t
s
,
 
a
 
p
i
p
e
 
(
|
)
,
 
t
h
e
n
 
n
u
m
b
e
r
 
o
f
 
d
a
y
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
1
0
 
p
k
g
s
 
/
 
5
 
d
a
y
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
,
9
,
1
0
 
|
 
5
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
=
3
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
2
,
2
,
4
,
1
,
4
 
|
 
3
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
i
g
h
t
 
(
D
=
4
)
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
1
,
1
 
|
 
4
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
L
a
r
g
e
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
4
,
3
,
2
,
4
,
5
 
|
 
2
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
I
n
p
u
t
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
S
t
r
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
o
n
R
a
n
d
o
m
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
 
n
 
=
 
6
 
+
 
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
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
4
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
k
g
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
 
p
k
g
s
.
p
u
s
h
(
1
 
+
 
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
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
8
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
 
=
 
2
 
+
 
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
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
(
n
 
-
 
1
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
I
n
p
u
t
S
t
r
(
`
$
{
p
k
g
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
 
|
 
$
{
d
}
`
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
f
l
a
s
h
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
f
l
a
s
h
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


 
 
 
 
 
 
{
f
r
a
m
e
 
?
 
(


 
 
 
 
 
 
 
 
<
B
i
n
a
r
y
S
e
a
r
c
h
A
n
s
w
e
r
V
i
z
 
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
 
p
k
g
s
=
{
p
a
r
s
e
d
.
p
k
g
s
}
 
D
=
{
p
a
r
s
e
d
.
D
}
 
/
>


 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
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


 
 
 
 
 
 
)
}


 
 
 
 
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
w
o
 
k
i
n
d
s
 
o
f
 
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
a
s
s
i
c
 
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
 
r
u
n
s
 
o
n
 
a
 
s
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
,
 
y
o
u
 
l
o
o
k
 
f
o
r
 
a
n
 
e
l
e
m
e
n
t
.
 
B
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
 
o
n
 
t
h
e
 
a
n
s
w
e
r
 
r
u
n
s
 
o
n
 
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
a
c
e
 
i
t
s
e
l
f
:
 
y
o
u
 
b
i
n
a
r
y
-
s
e
a
r
c
h
 
o
v
e
r
 
a
l
l
 
p
o
s
s
i
b
l
e
 
a
n
s
w
e
r
s
 
a
n
d
 
a
t
 
e
a
c
h
 
g
u
e
s
s
 
a
s
k
:
 
i
s
 
t
h
i
s
 
g
u
e
s
s
 
f
e
a
s
i
b
l
e
?
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
n
 
d
o
e
s
 
i
t
 
w
o
r
k
?
"
,
 
b
o
d
y
:
 
"
Y
o
u
 
n
e
e
d
 
m
o
n
o
t
o
n
i
c
 
f
e
a
s
i
b
i
l
i
t
y
:
 
i
f
 
c
a
p
a
c
i
t
y
 
c
 
w
o
r
k
s
,
 
t
h
e
n
 
a
n
y
 
c
'
 
>
 
c
 
a
l
s
o
 
w
o
r
k
s
.
 
T
h
e
n
 
t
h
e
 
s
e
t
 
o
f
 
f
e
a
s
i
b
l
e
 
c
a
p
a
c
i
t
i
e
s
 
i
s
 
a
 
s
u
f
f
i
x
 
[
c
*
,
 
i
n
f
i
n
i
t
y
)
.
 
B
i
n
a
r
y
-
s
e
a
r
c
h
 
f
o
r
 
c
*
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
h
e
 
t
h
r
e
e
 
i
n
g
r
e
d
i
e
n
t
s
"
,
 
b
o
d
y
:
 
"
(
1
)
 
A
n
s
w
e
r
 
b
o
u
n
d
s
 
[
l
o
,
 
h
i
]
.
 
(
2
)
 
A
 
f
e
a
s
i
b
i
l
i
t
y
 
p
r
e
d
i
c
a
t
e
 
c
a
n
D
o
(
m
i
d
)
 
r
e
t
u
r
n
i
n
g
 
b
o
o
l
.
 
(
3
)
 
A
 
m
o
n
o
t
o
n
e
 
d
i
r
e
c
t
i
o
n
:
 
f
e
a
s
i
b
l
e
 
m
e
a
n
s
 
t
r
y
 
s
m
a
l
l
e
r
 
(
s
h
r
i
n
k
 
h
i
)
;
 
i
n
f
e
a
s
i
b
l
e
 
m
e
a
n
s
 
t
r
y
 
l
a
r
g
e
r
 
(
g
r
o
w
 
l
o
)
.
 
W
o
r
k
s
 
f
o
r
 
m
i
n
 
A
N
D
 
m
a
x
 
p
r
o
b
l
e
m
s
,
 
f
l
i
p
 
t
h
e
 
d
i
r
e
c
t
i
o
n
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
l
a
s
s
i
c
 
p
r
o
b
l
e
m
s
"
,
 
b
o
d
y
:
 
"
C
a
p
a
c
i
t
y
 
t
o
 
s
h
i
p
 
p
a
c
k
a
g
e
s
,
 
s
p
l
i
t
-
a
r
r
a
y
 
l
a
r
g
e
s
t
-
s
u
m
,
 
k
o
k
o
 
e
a
t
i
n
g
 
b
a
n
a
n
a
s
,
 
p
a
i
n
t
e
r
 
p
a
r
t
i
t
i
o
n
,
 
a
g
g
r
e
s
s
i
v
e
 
c
o
w
s
,
 
s
m
a
l
l
e
s
t
 
d
i
v
i
s
o
r
,
 
m
a
g
n
e
t
i
c
 
f
o
r
c
e
,
 
a
l
l
o
c
a
t
e
 
b
o
o
k
s
.
 
A
l
l
 
r
e
d
u
c
e
 
t
o
 
b
i
n
a
r
y
-
s
e
a
r
c
h
-
o
n
-
a
n
s
w
e
r
 
p
l
u
s
 
g
r
e
e
d
y
 
f
e
a
s
i
b
i
l
i
t
y
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
 
o
n
 
a
n
s
w
e
r
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
a
r
c
h
 
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
a
c
e
,
 
n
o
t
 
t
h
e
 
d
a
t
a
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


 
 
 
 
 
 
 
 
 
 
I
n
s
t
e
a
d
 
o
f
 
s
e
a
r
c
h
i
n
g
 
f
o
r
 
a
n
 
e
l
e
m
e
n
t
 
i
n
 
d
a
t
a
,
 
y
o
u
 
s
e
a
r
c
h
 
f
o
r
 
a
 
p
a
r
a
m
e
t
e
r
 
v
a
l
u
e
 
t
h
a
t
 
m
a
k
e
s
 
t
h
e
 
p
r
o
b
l
e
m
 
s
o
l
v
a
b
l
e
.
 
T
h
e
 
d
a
t
a
 
b
e
c
o
m
e
s
 
t
h
e
 
e
n
v
i
r
o
n
m
e
n
t
 
f
o
r
 
a
 
y
e
s
/
n
o
 
t
e
s
t
;
 
t
h
e
 
s
e
a
r
c
h
 
h
a
p
p
e
n
s
 
o
n
 
t
h
e
 
k
n
o
b
 
y
o
u
 
c
a
n
 
t
u
r
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
a
p
-
3
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
4
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
7
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
p
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
p
k
g
s
 
=
 
[
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
,
9
,
1
0
]
,
 
D
=
5
.
 
M
i
n
i
m
u
m
 
c
a
p
a
c
i
t
y
?
"
,
 
a
:
 
"
1
5
"
 
}
,


 
 
 
 
{
 
q
:
 
"
p
k
g
s
 
=
 
[
3
,
2
,
2
,
4
,
1
,
4
]
,
 
D
=
3
.
 
M
i
n
i
m
u
m
 
c
a
p
a
c
i
t
y
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
p
l
i
t
 
[
7
,
2
,
5
,
1
0
,
8
]
 
i
n
t
o
 
2
 
s
u
b
a
r
r
a
y
s
 
w
i
t
h
 
m
i
n
i
m
a
l
 
m
a
x
-
s
u
m
.
 
A
n
s
w
e
r
?
"
,
 
a
:
 
"
1
8
"
 
}
,


 
 
 
 
{
 
q
:
 
"
K
o
k
o
 
&
 
p
i
l
e
s
=
[
3
,
6
,
7
,
1
1
]
,
 
h
=
8
.
 
M
i
n
i
m
u
m
 
e
a
t
i
n
g
 
s
p
e
e
d
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


 
 
 
 
 
 
 
 
I
n
 
e
v
e
r
y
 
p
r
o
b
l
e
m
,
 
d
e
f
i
n
e
 
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
a
c
e
 
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
 
t
h
e
 
f
e
a
s
i
b
i
l
i
t
y
 
p
r
e
d
i
c
a
t
e
,
 
t
h
e
n
 
b
i
n
a
r
y
-
s
e
a
r
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
s
t
o
n
e
-
2
0
0
 
m
b
-
3
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
r
-
1
"
>
#
{
i
 
+
 
1
}
.
<
/
s
p
a
n
>
 
{
p
.
q
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
 
f
l
e
x
-
w
r
a
p
 
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
 
v
 
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
u
e
s
s
e
s
(
v
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
w
-
2
8
 
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
 
f
o
c
u
s
:
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
h
o
w
n
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
h
o
w
n
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
m
e
d
i
u
m
 
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
{
`
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
 
`
C
o
r
r
e
c
t
 
-
 
$
{
p
.
a
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
4
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


 
 
 
 
 
 
 
 
 
 
O
u
t
e
r
 
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
 
O
(
l
o
g
(
h
i
 
-
 
l
o
)
)
.
 
F
e
a
s
i
b
i
l
i
t
y
 
c
h
e
c
k
:
 
O
(
n
)
 
(
o
n
e
 
p
a
s
s
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
 
*
 
l
o
g
(
s
u
m
)
)
.
 
F
o
r
 
s
h
i
p
-
p
a
c
k
a
g
e
s
 
t
h
i
s
 
i
s
 
r
o
u
g
h
l
y
 
O
(
n
 
*
 
3
0
)
,
 
b
l
a
z
i
n
g
 
f
a
s
t
 
e
v
e
n
 
w
h
e
n
 
s
u
m
 
i
s
 
1
0
^
9
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
T
e
m
p
l
a
t
e
 
t
o
 
m
e
m
o
r
i
z
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
C
o
d
e
B
l
o
c
k
 
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
m
b
-
0
"
>


{
`
l
o
,
 
h
i
 
=
 
l
o
w
e
s
t
A
n
s
w
e
r
,
 
h
i
g
h
e
s
t
A
n
s
w
e
r


w
h
i
l
e
 
l
o
 
<
 
h
i
:


 
 
 
 
m
i
d
 
=
 
(
l
o
 
+
 
h
i
)
 
/
/
 
2


 
 
 
 
i
f
 
f
e
a
s
i
b
l
e
(
m
i
d
)
:


 
 
 
 
 
 
 
 
h
i
 
=
 
m
i
d


 
 
 
 
e
l
s
e
:


 
 
 
 
 
 
 
 
l
o
 
=
 
m
i
d
 
+
 
1


r
e
t
u
r
n
 
l
o
`
}


 
 
 
 
 
 
 
 
<
/
C
o
d
e
B
l
o
c
k
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
 
b
o
u
n
d
s
 
m
a
t
t
e
r
:
 
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
o
 
=
 
m
a
x
(
p
k
g
)
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
 
0
 
o
r
 
1
.
 
A
n
y
t
h
i
n
g
 
s
m
a
l
l
e
r
 
t
h
a
n
 
t
h
e
 
l
a
r
g
e
s
t
 
p
a
c
k
a
g
e
 
i
s
 
t
r
i
v
i
a
l
l
y
 
i
n
f
e
a
s
i
b
l
e
.
 
A
n
d
 
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
h
i
 
=
 
s
u
m
(
p
k
g
)
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
 
b
e
c
a
u
s
e
 
t
h
a
t
 
l
o
a
d
s
 
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
 
i
n
 
o
n
e
 
d
a
y
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
8
_
B
i
n
a
r
y
S
e
a
r
c
h
A
n
s
w
e
r
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
h
a
t
 
p
r
o
p
e
r
t
y
 
M
U
S
T
 
t
h
e
 
f
e
a
s
i
b
i
l
i
t
y
 
f
u
n
c
t
i
o
n
 
s
a
t
i
s
f
y
 
f
o
r
 
b
i
n
a
r
y
-
s
e
a
r
c
h
-
o
n
-
a
n
s
w
e
r
 
t
o
 
w
o
r
k
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
 
m
u
s
t
 
r
u
n
 
i
n
 
O
(
1
)
"
,


 
 
 
 
 
 
 
 
"
I
t
 
m
u
s
t
 
b
e
 
m
o
n
o
t
o
n
i
c
 
-
 
i
f
 
f
e
a
s
i
b
l
e
(
x
)
 
t
h
e
n
 
f
e
a
s
i
b
l
e
(
x
+
1
)
 
t
o
o
 
(
o
r
 
i
t
s
 
d
u
a
l
)
"
,


 
 
 
 
 
 
 
 
"
I
t
 
m
u
s
t
 
c
o
m
p
a
r
e
 
a
r
r
a
y
s
"
,


 
 
 
 
 
 
 
 
"
I
t
 
m
u
s
t
 
a
l
w
a
y
s
 
r
e
t
u
r
n
 
t
r
u
e
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
 
m
o
n
o
t
o
n
i
c
i
t
y
,
 
t
h
e
 
s
e
t
 
o
f
 
f
e
a
s
i
b
l
e
 
a
n
s
w
e
r
s
 
i
s
n
'
t
 
a
 
p
r
e
f
i
x
/
s
u
f
f
i
x
 
-
 
y
o
u
 
c
a
n
'
t
 
h
a
l
v
e
 
t
h
e
 
s
p
a
c
e
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
 
s
h
i
p
-
p
a
c
k
a
g
e
s
,
 
w
h
y
 
i
s
 
l
o
 
=
 
m
a
x
(
p
a
c
k
a
g
e
s
)
 
a
n
d
 
n
o
t
 
1
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
B
e
c
a
u
s
e
 
a
 
s
i
n
g
l
e
 
p
a
c
k
a
g
e
 
h
e
a
v
i
e
r
 
t
h
a
n
 
c
a
p
a
c
i
t
y
 
c
a
n
 
n
e
v
e
r
 
f
i
t
 
-
 
a
n
y
t
h
i
n
g
 
b
e
l
o
w
 
m
a
x
(
p
k
g
)
 
i
s
 
i
n
f
e
a
s
i
b
l
e
"
,


 
 
 
 
 
 
 
 
"
S
o
 
t
h
e
 
l
o
o
p
 
r
u
n
s
 
f
e
w
e
r
 
t
i
m
e
s
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
 
1
 
i
s
 
o
d
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
I
f
 
c
a
p
 
<
 
m
a
x
(
p
k
g
)
,
 
e
v
e
n
 
o
n
e
 
p
a
c
k
a
g
e
 
o
v
e
r
f
l
o
w
s
 
a
n
y
 
d
a
y
'
s
 
l
o
a
d
.
 
m
a
x
(
p
k
g
)
 
i
s
 
t
h
e
 
t
r
u
e
 
f
l
o
o
r
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
 
o
f
 
b
i
n
a
r
y
-
s
e
a
r
c
h
-
o
n
-
a
n
s
w
e
r
 
w
h
e
n
 
a
n
s
w
e
r
 
r
a
n
g
e
 
i
s
 
[
0
,
 
S
]
 
a
n
d
 
f
e
a
s
i
b
i
l
i
t
y
 
i
s
 
O
(
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
O
(
n
)
"
,
 
"
O
(
n
 
*
 
l
o
g
 
S
)
"
,
 
"
O
(
S
 
*
 
n
)
"
,
 
"
O
(
n
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
l
o
g
 
S
 
b
i
n
a
r
y
-
s
e
a
r
c
h
 
i
t
e
r
a
t
i
o
n
s
,
 
e
a
c
h
 
c
a
l
l
i
n
g
 
f
e
a
s
i
b
i
l
i
t
y
 
i
n
 
O
(
n
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
P
a
c
k
a
g
e
s
 
=
 
[
1
,
2
,
3
,
4
,
5
]
,
 
D
=
2
.
 
S
m
a
l
l
e
s
t
 
c
a
p
a
c
i
t
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
7
"
,
 
"
9
"
,
 
"
1
0
"
,
 
"
1
5
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
y
 
9
:
 
d
a
y
1
=
[
1
,
2
,
3
]
 
s
u
m
=
6
,
 
d
a
y
2
=
[
4
,
5
]
 
s
u
m
=
9
 
<
=
 
9
 
-
 
2
 
d
a
y
s
.
 
T
r
y
 
8
:
 
d
a
y
1
=
[
1
,
2
,
3
]
 
s
u
m
=
6
,
 
d
a
y
2
=
[
4
]
,
 
d
a
y
3
=
[
5
]
 
-
 
3
 
d
a
y
s
 
>
 
2
.
 
S
o
 
9
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
B
i
n
a
r
y
 
S
e
a
r
c
h
 
o
n
 
A
n
s
w
e
r
"


 
 
 
 
 
 
l
e
v
e
l
=
{
8
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
V
e
r
y
 
h
i
g
h
 
-
 
a
 
r
e
c
u
r
r
i
n
g
 
F
A
A
N
G
 
p
a
t
t
e
r
n
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
l
i
d
i
n
g
 
W
i
n
d
o
w
 
(
A
d
v
a
n
c
e
d
)
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


