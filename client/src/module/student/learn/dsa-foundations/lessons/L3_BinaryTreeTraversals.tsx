
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
b
i
n
a
r
y
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
 
T
r
e
e
N
o
d
e
D
a
t
a
 
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
d
o
n
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
;


c
o
n
s
t
 
N
O
D
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
b
e
f
2
6
4
"
,


 
 
d
o
n
e
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
D
a
r
k
,


 
 
v
i
s
i
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
S
o
f
t
,


}
;


c
o
n
s
t
 
N
O
D
E
_
T
E
X
T
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


 
 
f
r
o
n
t
i
e
r
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


 
 
d
o
n
e
:
 
"
#
f
f
f
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
e
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




i
n
t
e
r
f
a
c
e
 
B
u
i
l
t
T
r
e
e
 
{


 
 
n
o
d
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
 
T
r
e
e
N
o
d
e
D
a
t
a
>
;


 
 
r
o
o
t
:
 
s
t
r
i
n
g
 
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
a
r
s
e
L
e
v
e
l
O
r
d
e
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
 
(
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
)
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
 
t
o
k
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
t
)
 
=
>
 
t
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
t
o
k
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
 
o
u
t
:
 
(
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
)
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
 
t
 
o
f
 
t
o
k
s
)
 
{


 
 
 
 
i
f
 
(
t
 
=
=
=
 
"
n
u
l
l
"
 
|
|
 
t
 
=
=
=
 
"
-
"
)
 
o
u
t
.
p
u
s
h
(
n
u
l
l
)
;


 
 
 
 
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
 
=
 
N
u
m
b
e
r
(
t
)
;


 
 
 
 
 
 
i
f
 
(
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


 
 
 
 
 
 
o
u
t
.
p
u
s
h
(
n
)
;


 
 
 
 
}


 
 
}


 
 
r
e
t
u
r
n
 
o
u
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
T
r
e
e
(
a
r
r
:
 
(
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
)
[
]
)
:
 
B
u
i
l
t
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
 
n
o
d
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
 
T
r
e
e
N
o
d
e
D
a
t
a
>
 
=
 
{
}
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
 
|
|
 
a
r
r
[
0
]
 
=
=
=
 
n
u
l
l
)
 
r
e
t
u
r
n
 
{
 
n
o
d
e
s
,
 
r
o
o
t
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
;


 
 
c
o
n
s
t
 
i
d
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
l
l
)
[
]
 
=
 
a
r
r
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
 
(
v
 
=
=
=
 
n
u
l
l
 
?
 
n
u
l
l
 
:
 
`
n
$
{
i
}
`
)
)
;


 
 
a
r
r
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
v
,
 
i
)
 
=
>
 
{


 
 
 
 
i
f
 
(
v
 
=
=
=
 
n
u
l
l
)
 
r
e
t
u
r
n
;


 
 
 
 
c
o
n
s
t
 
i
d
 
=
 
i
d
s
[
i
]
!
;


 
 
 
 
n
o
d
e
s
[
i
d
]
 
=
 
{
 
i
d
,
 
v
a
l
u
e
:
 
v
 
}
;


 
 
}
)
;


 
 
l
e
t
 
c
h
i
l
d
I
d
x
 
=
 
1
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
 
&
&
 
c
h
i
l
d
I
d
x
 
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


 
 
 
 
i
f
 
(
a
r
r
[
i
]
 
=
=
=
 
n
u
l
l
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


 
 
 
 
c
o
n
s
t
 
i
d
 
=
 
i
d
s
[
i
]
!
;


 
 
 
 
i
f
 
(
c
h
i
l
d
I
d
x
 
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
)
 
{


 
 
 
 
 
 
i
f
 
(
i
d
s
[
c
h
i
l
d
I
d
x
]
)
 
n
o
d
e
s
[
i
d
]
.
l
e
f
t
 
=
 
i
d
s
[
c
h
i
l
d
I
d
x
]
!
;


 
 
 
 
 
 
c
h
i
l
d
I
d
x
+
+
;


 
 
 
 
}


 
 
 
 
i
f
 
(
c
h
i
l
d
I
d
x
 
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
)
 
{


 
 
 
 
 
 
i
f
 
(
i
d
s
[
c
h
i
l
d
I
d
x
]
)
 
n
o
d
e
s
[
i
d
]
.
r
i
g
h
t
 
=
 
i
d
s
[
c
h
i
l
d
I
d
x
]
!
;


 
 
 
 
 
 
c
h
i
l
d
I
d
x
+
+
;


 
 
 
 
}


 
 
}


 
 
r
e
t
u
r
n
 
{
 
n
o
d
e
s
,
 
r
o
o
t
:
 
i
d
s
[
0
]
 
?
?
 
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
e
e
 
S
V
G
 
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
p
u
t
e
L
a
y
o
u
t
(


 
 
n
o
d
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
 
T
r
e
e
N
o
d
e
D
a
t
a
>
,


 
 
r
o
o
t
:
 
s
t
r
i
n
g
 
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
,


)
:
 
{
 
x
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
 
y
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
 
d
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


 
 
c
o
n
s
t
 
x
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


 
 
c
o
n
s
t
 
y
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


 
 
l
e
t
 
c
o
l
 
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
 
w
a
l
k
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
,
 
d
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
)
 
{


 
 
 
 
i
f
 
(
!
i
d
 
|
|
 
!
n
o
d
e
s
[
i
d
]
)
 
r
e
t
u
r
n
;


 
 
 
 
w
a
l
k
(
n
o
d
e
s
[
i
d
]
.
l
e
f
t
,
 
d
e
p
t
h
 
+
 
1
)
;


 
 
 
 
x
[
i
d
]
 
=
 
c
o
l
+
+
;


 
 
 
 
y
[
i
d
]
 
=
 
d
e
p
t
h
;


 
 
 
 
w
a
l
k
(
n
o
d
e
s
[
i
d
]
.
r
i
g
h
t
,
 
d
e
p
t
h
 
+
 
1
)
;


 
 
}


 
 
w
a
l
k
(
r
o
o
t
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
0
,
 
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
y
)
)
;


 
 
r
e
t
u
r
n
 
{
 
x
,
 
y
,
 
d
e
p
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
e
e
V
i
z
(
{


 
 
n
o
d
e
s
,


 
 
r
o
o
t
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
,


 
 
w
i
d
t
h
 
=
 
5
6
0
,


 
 
h
e
i
g
h
t
 
=
 
2
8
0
,


}
:
 
{


 
 
n
o
d
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
 
T
r
e
e
N
o
d
e
D
a
t
a
>
;


 
 
r
o
o
t
:
 
s
t
r
i
n
g
 
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
 
{
 
x
,
 
y
,
 
d
e
p
t
h
 
}
 
=
 
c
o
m
p
u
t
e
L
a
y
o
u
t
(
n
o
d
e
s
,
 
r
o
o
t
)
;


 
 
c
o
n
s
t
 
n
 
=
 
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
x
)
.
l
e
n
g
t
h
;


 
 
i
f
 
(
n
 
=
=
=
 
0
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
w
i
d
t
h
}
 
h
e
i
g
h
t
=
{
6
0
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
w
i
d
t
h
}
 
6
0
`
}
>


 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
w
i
d
t
h
 
/
 
2
}
 
y
=
{
3
5
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
3
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


 
 
 
 
 
 
 
 
 
 
(
e
m
p
t
y
 
t
r
e
e
)


 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
<
/
s
v
g
>


 
 
 
 
)
;


 
 
}


 
 
c
o
n
s
t
 
P
A
D
 
=
 
3
0
;


 
 
c
o
n
s
t
 
x
S
c
a
l
e
 
=
 
n
 
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
 
P
A
D
 
*
 
2
)
 
/
 
(
n
 
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
c
a
l
e
 
=
 
d
e
p
t
h
 
>
 
0
 
?
 
(
h
e
i
g
h
t
 
-
 
P
A
D
 
*
 
2
 
-
 
2
0
)
 
/
 
d
e
p
t
h
 
:
 
0
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




 
 
c
o
n
s
t
 
p
x
 
=
 
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
 
=
>
 
P
A
D
 
+
 
x
[
i
d
]
 
*
 
x
S
c
a
l
e
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
 
=
>
 
P
A
D
 
+
 
y
[
i
d
]
 
*
 
y
S
c
a
l
e
;




 
 
c
o
n
s
t
 
i
d
s
 
=
 
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
n
o
d
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
i
d
s
.
m
a
p
(
(
i
d
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
d
 
=
 
n
o
d
e
s
[
i
d
]
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
[
n
d
.
l
e
f
t
,
 
n
d
.
r
i
g
h
t
]
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
 
a
s
 
s
t
r
i
n
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
c
i
d
)
 
=
>
 
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
$
{
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


 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
p
x
(
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
y
1
=
{
p
y
(
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
p
x
(
c
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
y
2
=
{
p
y
(
c
i
d
)
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
8
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
)
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
{
i
d
s
.
m
a
p
(
(
i
d
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
a
t
e
 
=
 
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
i
d
]
 
?
?
 
"
i
d
l
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
g
 
k
e
y
=
{
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
x
(
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
y
=
{
p
y
(
i
d
)
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
N
O
D
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
a
t
e
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
s
t
a
t
e
 
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
s
t
a
t
e
 
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
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
p
y
(
i
d
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
N
O
D
E
_
T
E
X
T
_
C
O
L
O
R
[
s
t
a
t
e
]
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
o
d
e
s
[
i
d
]
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




t
y
p
e
 
M
o
d
e
 
=
 
"
i
n
o
r
d
e
r
"
 
|
 
"
p
r
e
o
r
d
e
r
"
 
|
 
"
p
o
s
t
o
r
d
e
r
"
 
|
 
"
l
e
v
e
l
o
r
d
e
r
"
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


 
 
o
u
t
p
u
t
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
c
k
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


 
 
q
u
e
u
e
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
:
 
R
e
c
o
r
d
<
M
o
d
e
,
 
s
t
r
i
n
g
[
]
>
 
=
 
{


 
 
i
n
o
r
d
e
r
:
 
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
o
r
d
e
r
(
n
o
d
e
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
 
i
s
 
n
u
l
l
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
n
o
r
d
e
r
(
n
o
d
e
.
l
e
f
t
)
"
,


 
 
 
 
"
 
 
v
i
s
i
t
(
n
o
d
e
)
"
,


 
 
 
 
"
 
 
i
n
o
r
d
e
r
(
n
o
d
e
.
r
i
g
h
t
)
"
,


 
 
]
,


 
 
p
r
e
o
r
d
e
r
:
 
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
o
r
d
e
r
(
n
o
d
e
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
 
i
s
 
n
u
l
l
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
 
 
v
i
s
i
t
(
n
o
d
e
)
"
,


 
 
 
 
"
 
 
p
r
e
o
r
d
e
r
(
n
o
d
e
.
l
e
f
t
)
"
,


 
 
 
 
"
 
 
p
r
e
o
r
d
e
r
(
n
o
d
e
.
r
i
g
h
t
)
"
,


 
 
]
,


 
 
p
o
s
t
o
r
d
e
r
:
 
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
o
s
t
o
r
d
e
r
(
n
o
d
e
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
 
i
s
 
n
u
l
l
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
 
 
p
o
s
t
o
r
d
e
r
(
n
o
d
e
.
l
e
f
t
)
"
,


 
 
 
 
"
 
 
p
o
s
t
o
r
d
e
r
(
n
o
d
e
.
r
i
g
h
t
)
"
,


 
 
 
 
"
 
 
v
i
s
i
t
(
n
o
d
e
)
"
,


 
 
]
,


 
 
l
e
v
e
l
o
r
d
e
r
:
 
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
f
s
(
r
o
o
t
)
:
"
,


 
 
 
 
"
 
 
q
 
<
-
 
[
r
o
o
t
]
"
,


 
 
 
 
"
 
 
w
h
i
l
e
 
q
 
n
o
t
 
e
m
p
t
y
:
"
,


 
 
 
 
"
 
 
 
 
n
o
d
e
 
<
-
 
q
.
d
e
q
u
e
u
e
(
)
"
,


 
 
 
 
"
 
 
 
 
v
i
s
i
t
(
n
o
d
e
)
"
,


 
 
 
 
"
 
 
 
 
i
f
 
n
o
d
e
.
l
e
f
t
:
 
 
q
.
e
n
q
u
e
u
e
(
n
o
d
e
.
l
e
f
t
)
"
,


 
 
 
 
"
 
 
 
 
i
f
 
n
o
d
e
.
r
i
g
h
t
:
 
q
.
e
n
q
u
e
u
e
(
n
o
d
e
.
r
i
g
h
t
)
"
,


 
 
]
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
:
 
B
u
i
l
t
T
r
e
e
,
 
m
o
d
e
:
 
M
o
d
e
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
 
{
 
n
o
d
e
s
,
 
r
o
o
t
 
}
 
=
 
t
;


 
 
c
o
n
s
t
 
v
i
s
i
t
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
 
o
u
t
p
u
t
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
 
=
 
[
]
;




 
 
i
f
 
(
!
r
o
o
t
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


 
 
 
 
 
 
v
a
r
s
:
 
{
 
m
o
d
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
 
"
T
r
e
e
 
i
s
 
e
m
p
t
y
.
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


 
 
 
 
 
 
o
u
t
p
u
t
:
 
[
]
,


 
 
 
 
 
 
s
t
a
c
k
:
 
[
]
,


 
 
 
 
 
 
q
u
e
u
e
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
l
e
v
e
l
o
r
d
e
r
"
)
 
{


 
 
 
 
c
o
n
s
t
 
q
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
r
o
o
t
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


 
 
 
 
 
 
v
a
r
s
:
 
{
 
m
o
d
e
,
 
q
u
e
u
e
d
:
 
1
,
 
v
i
s
i
t
e
d
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
E
n
q
u
e
u
e
 
r
o
o
t
 
$
{
n
o
d
e
s
[
r
o
o
t
]
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
r
o
o
t
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


 
 
 
 
 
 
o
u
t
p
u
t
:
 
[
]
,


 
 
 
 
 
 
s
t
a
c
k
:
 
[
]
,


 
 
 
 
 
 
q
u
e
u
e
:
 
q
.
m
a
p
(
(
i
d
)
 
=
>
 
n
o
d
e
s
[
i
d
]
.
v
a
l
u
e
)
,


 
 
 
 
}
)
;


 
 
 
 
w
h
i
l
e
 
(
q
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
 
m
o
d
e
,
 
q
u
e
u
e
d
:
 
q
.
l
e
n
g
t
h
,
 
v
i
s
i
t
e
d
:
 
o
u
t
p
u
t
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
 
`
Q
u
e
u
e
 
h
a
s
 
$
{
q
.
l
e
n
g
t
h
}
 
n
o
d
e
(
s
)
.
 
C
o
n
t
i
n
u
e
.
`
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


 
 
 
 
 
 
 
 
 
 
.
.
.
v
i
s
i
t
e
d
,


 
 
 
 
 
 
 
 
 
 
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
q
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
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


 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,


 
 
 
 
 
 
 
 
s
t
a
c
k
:
 
[
]
,


 
 
 
 
 
 
 
 
q
u
e
u
e
:
 
q
.
m
a
p
(
(
i
d
)
 
=
>
 
n
o
d
e
s
[
i
d
]
.
v
a
l
u
e
)
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
c
o
n
s
t
 
i
d
 
=
 
q
.
s
h
i
f
t
(
)
!
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


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
m
o
d
e
,
 
q
u
e
u
e
d
:
 
q
.
l
e
n
g
t
h
,
 
n
o
d
e
:
 
n
o
d
e
s
[
i
d
]
.
v
a
l
u
e
,
 
v
i
s
i
t
e
d
:
 
o
u
t
p
u
t
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
 
`
D
e
q
u
e
u
e
 
$
{
n
o
d
e
s
[
i
d
]
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


 
 
 
 
 
 
 
 
 
 
.
.
.
v
i
s
i
t
e
d
,


 
 
 
 
 
 
 
 
 
 
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
,


 
 
 
 
 
 
 
 
 
 
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
q
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
 
[
x
,
 
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


 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,


 
 
 
 
 
 
 
 
s
t
a
c
k
:
 
[
]
,


 
 
 
 
 
 
 
 
q
u
e
u
e
:
 
q
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
 
n
o
d
e
s
[
x
]
.
v
a
l
u
e
)
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
o
u
t
p
u
t
.
p
u
s
h
(
n
o
d
e
s
[
i
d
]
.
v
a
l
u
e
)
;


 
 
 
 
 
 
v
i
s
i
t
e
d
[
i
d
]
 
=
 
"
d
o
n
e
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


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
m
o
d
e
,
 
q
u
e
u
e
d
:
 
q
.
l
e
n
g
t
h
,
 
n
o
d
e
:
 
n
o
d
e
s
[
i
d
]
.
v
a
l
u
e
,
 
v
i
s
i
t
e
d
:
 
o
u
t
p
u
t
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
 
`
V
i
s
i
t
 
$
{
n
o
d
e
s
[
i
d
]
.
v
a
l
u
e
}
 
-
 
a
p
p
e
n
d
 
t
o
 
o
u
t
p
u
t
.
`
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


 
 
 
 
 
 
 
 
 
 
.
.
.
v
i
s
i
t
e
d
,


 
 
 
 
 
 
 
 
 
 
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
q
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
 
[
x
,
 
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


 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,


 
 
 
 
 
 
 
 
s
t
a
c
k
:
 
[
]
,


 
 
 
 
 
 
 
 
q
u
e
u
e
:
 
q
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
 
n
o
d
e
s
[
x
]
.
v
a
l
u
e
)
,


 
 
 
 
 
 
}
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
[
i
d
]
.
l
e
f
t
)
 
{


 
 
 
 
 
 
 
 
q
.
p
u
s
h
(
n
o
d
e
s
[
i
d
]
.
l
e
f
t
!
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


 
 
 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
m
o
d
e
,
 
q
u
e
u
e
d
:
 
q
.
l
e
n
g
t
h
,
 
v
i
s
i
t
e
d
:
 
o
u
t
p
u
t
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
 
`
E
n
q
u
e
u
e
 
l
e
f
t
 
c
h
i
l
d
 
$
{
n
o
d
e
s
[
n
o
d
e
s
[
i
d
]
.
l
e
f
t
!
]
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


 
 
 
 
 
 
 
 
 
 
 
 
.
.
.
v
i
s
i
t
e
d
,


 
 
 
 
 
 
 
 
 
 
 
 
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
q
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
 
[
x
,
 
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


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,


 
 
 
 
 
 
 
 
 
 
s
t
a
c
k
:
 
[
]
,


 
 
 
 
 
 
 
 
 
 
q
u
e
u
e
:
 
q
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
 
n
o
d
e
s
[
x
]
.
v
a
l
u
e
)
,


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
}


 
 
 
 
 
 
i
f
 
(
n
o
d
e
s
[
i
d
]
.
r
i
g
h
t
)
 
{


 
 
 
 
 
 
 
 
q
.
p
u
s
h
(
n
o
d
e
s
[
i
d
]
.
r
i
g
h
t
!
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
 
6
,


 
 
 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
m
o
d
e
,
 
q
u
e
u
e
d
:
 
q
.
l
e
n
g
t
h
,
 
v
i
s
i
t
e
d
:
 
o
u
t
p
u
t
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
 
`
E
n
q
u
e
u
e
 
r
i
g
h
t
 
c
h
i
l
d
 
$
{
n
o
d
e
s
[
n
o
d
e
s
[
i
d
]
.
r
i
g
h
t
!
]
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


 
 
 
 
 
 
 
 
 
 
 
 
.
.
.
v
i
s
i
t
e
d
,


 
 
 
 
 
 
 
 
 
 
 
 
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
q
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
 
[
x
,
 
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


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,


 
 
 
 
 
 
 
 
 
 
s
t
a
c
k
:
 
[
]
,


 
 
 
 
 
 
 
 
 
 
q
u
e
u
e
:
 
q
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
 
n
o
d
e
s
[
x
]
.
v
a
l
u
e
)
,


 
 
 
 
 
 
 
 
}
)
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
 
2
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
m
o
d
e
,
 
q
u
e
u
e
d
:
 
0
,
 
v
i
s
i
t
e
d
:
 
o
u
t
p
u
t
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
 
`
Q
u
e
u
e
 
e
m
p
t
y
 
-
 
t
r
a
v
e
r
s
a
l
 
d
o
n
e
:
 
[
$
{
o
u
t
p
u
t
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
`
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
 
v
i
s
i
t
e
d
,


 
 
 
 
 
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,


 
 
 
 
 
 
s
t
a
c
k
:
 
[
]
,


 
 
 
 
 
 
q
u
e
u
e
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
/
 
D
F
S


 
 
c
o
n
s
t
 
c
a
l
l
S
t
a
c
k
:
 
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
 
p
h
a
s
e
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
u
n
c
t
i
o
n
 
p
u
s
h
C
a
l
l
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
 
{


 
 
 
 
c
a
l
l
S
t
a
c
k
.
p
u
s
h
(
{
 
i
d
,
 
p
h
a
s
e
:
 
0
 
}
)
;


 
 
}




 
 
p
u
s
h
C
a
l
l
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
 
m
o
d
e
,
 
s
t
a
c
k
D
e
p
t
h
:
 
c
a
l
l
S
t
a
c
k
.
l
e
n
g
t
h
,
 
v
i
s
i
t
e
d
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
S
t
a
r
t
:
 
c
a
l
l
 
$
{
m
o
d
e
}
(
$
{
n
o
d
e
s
[
r
o
o
t
]
.
v
a
l
u
e
}
)
.
`
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
r
o
o
t
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


 
 
 
 
o
u
t
p
u
t
:
 
[
]
,


 
 
 
 
s
t
a
c
k
:
 
c
a
l
l
S
t
a
c
k
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
 
n
o
d
e
s
[
c
.
i
d
]
.
v
a
l
u
e
)
,


 
 
 
 
q
u
e
u
e
:
 
[
]
,


 
 
}
)
;




 
 
w
h
i
l
e
 
(
c
a
l
l
S
t
a
c
k
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


 
 
 
 
c
o
n
s
t
 
t
o
p
 
=
 
c
a
l
l
S
t
a
c
k
[
c
a
l
l
S
t
a
c
k
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
;


 
 
 
 
c
o
n
s
t
 
n
d
 
=
 
n
o
d
e
s
[
t
o
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
 
v
i
s
i
t
e
d
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
 
.
.
.
v
i
s
i
t
e
d
 
}
;


 
 
 
 
c
a
l
l
S
t
a
c
k
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
c
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
!
v
i
s
i
t
e
d
M
a
p
[
c
.
i
d
]
)
 
v
i
s
i
t
e
d
M
a
p
[
c
.
i
d
]
 
=
 
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
;


 
 
 
 
}
)
;


 
 
 
 
v
i
s
i
t
e
d
M
a
p
[
t
o
p
.
i
d
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
i
n
o
r
d
e
r
"
)
 
{


 
 
 
 
 
 
i
f
 
(
t
o
p
.
p
h
a
s
e
 
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
 
1
,


 
 
 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
m
o
d
e
,
 
s
t
a
c
k
D
e
p
t
h
:
 
c
a
l
l
S
t
a
c
k
.
l
e
n
g
t
h
,
 
n
o
d
e
:
 
n
d
.
v
a
l
u
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
E
n
t
e
r
 
i
n
o
r
d
e
r
(
$
{
n
d
.
v
a
l
u
e
}
)
.
`
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
 
v
i
s
i
t
e
d
M
a
p
,


 
 
 
 
 
 
 
 
 
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,


 
 
 
 
 
 
 
 
 
 
s
t
a
c
k
:
 
c
a
l
l
S
t
a
c
k
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
 
n
o
d
e
s
[
c
.
i
d
]
.
v
a
l
u
e
)
,


 
 
 
 
 
 
 
 
 
 
q
u
e
u
e
:
 
[
]
,


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
t
o
p
.
p
h
a
s
e
 
=
 
1
;


 
 
 
 
 
 
 
 
i
f
 
(
n
d
.
l
e
f
t
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
 
m
o
d
e
,
 
s
t
a
c
k
D
e
p
t
h
:
 
c
a
l
l
S
t
a
c
k
.
l
e
n
g
t
h
,
 
n
o
d
e
:
 
n
d
.
v
a
l
u
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
R
e
c
u
r
s
e
 
l
e
f
t
 
i
n
t
o
 
$
{
n
o
d
e
s
[
n
d
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
}
.
`
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
 
v
i
s
i
t
e
d
M
a
p
,


 
 
 
 
 
 
 
 
 
 
 
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,


 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
c
k
:
 
c
a
l
l
S
t
a
c
k
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
 
n
o
d
e
s
[
c
.
i
d
]
.
v
a
l
u
e
)
,


 
 
 
 
 
 
 
 
 
 
 
 
q
u
e
u
e
:
 
[
]
,


 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
 
 
p
u
s
h
C
a
l
l
(
n
d
.
l
e
f
t
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


 
 
 
 
 
 
}


 
 
 
 
 
 
i
f
 
(
t
o
p
.
p
h
a
s
e
 
=
=
=
 
1
)
 
{


 
 
 
 
 
 
 
 
o
u
t
p
u
t
.
p
u
s
h
(
n
d
.
v
a
l
u
e
)
;


 
 
 
 
 
 
 
 
v
i
s
i
t
e
d
[
t
o
p
.
i
d
]
 
=
 
"
d
o
n
e
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
 
3
,


 
 
 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
m
o
d
e
,
 
s
t
a
c
k
D
e
p
t
h
:
 
c
a
l
l
S
t
a
c
k
.
l
e
n
g
t
h
,
 
n
o
d
e
:
 
n
d
.
v
a
l
u
e
,
 
v
i
s
i
t
e
d
:
 
o
u
t
p
u
t
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
 
`
V
i
s
i
t
 
$
{
n
d
.
v
a
l
u
e
}
 
-
 
a
p
p
e
n
d
 
t
o
 
o
u
t
p
u
t
.
`
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


 
 
 
 
 
 
 
 
 
 
 
 
.
.
.
v
i
s
i
t
e
d
,


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
a
l
l
S
t
a
c
k
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
 
[
c
.
i
d
,
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
)
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,


 
 
 
 
 
 
 
 
 
 
s
t
a
c
k
:
 
c
a
l
l
S
t
a
c
k
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
 
n
o
d
e
s
[
c
.
i
d
]
.
v
a
l
u
e
)
,


 
 
 
 
 
 
 
 
 
 
q
u
e
u
e
:
 
[
]
,


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
t
o
p
.
p
h
a
s
e
 
=
 
2
;


 
 
 
 
 
 
 
 
i
f
 
(
n
d
.
r
i
g
h
t
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
 
m
o
d
e
,
 
s
t
a
c
k
D
e
p
t
h
:
 
c
a
l
l
S
t
a
c
k
.
l
e
n
g
t
h
,
 
n
o
d
e
:
 
n
d
.
v
a
l
u
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
R
e
c
u
r
s
e
 
r
i
g
h
t
 
i
n
t
o
 
$
{
n
o
d
e
s
[
n
d
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
}
.
`
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
.
.
.
v
i
s
i
t
e
d
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
a
l
l
S
t
a
c
k
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
 
[
c
.
i
d
,
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
,


 
 
 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,


 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
c
k
:
 
c
a
l
l
S
t
a
c
k
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
 
n
o
d
e
s
[
c
.
i
d
]
.
v
a
l
u
e
)
,


 
 
 
 
 
 
 
 
 
 
 
 
q
u
e
u
e
:
 
[
]
,


 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
 
 
p
u
s
h
C
a
l
l
(
n
d
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
t
i
n
u
e
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}


 
 
 
 
 
 
c
a
l
l
S
t
a
c
k
.
p
o
p
(
)
;


 
 
 
 
}
 
e
l
s
e
 
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
o
r
d
e
r
"
)
 
{


 
 
 
 
 
 
i
f
 
(
t
o
p
.
p
h
a
s
e
 
=
=
=
 
0
)
 
{


 
 
 
 
 
 
 
 
o
u
t
p
u
t
.
p
u
s
h
(
n
d
.
v
a
l
u
e
)
;


 
 
 
 
 
 
 
 
v
i
s
i
t
e
d
[
t
o
p
.
i
d
]
 
=
 
"
d
o
n
e
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
 
2
,


 
 
 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
m
o
d
e
,
 
s
t
a
c
k
D
e
p
t
h
:
 
c
a
l
l
S
t
a
c
k
.
l
e
n
g
t
h
,
 
n
o
d
e
:
 
n
d
.
v
a
l
u
e
,
 
v
i
s
i
t
e
d
:
 
o
u
t
p
u
t
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
 
`
V
i
s
i
t
 
$
{
n
d
.
v
a
l
u
e
}
 
-
 
a
p
p
e
n
d
 
t
o
 
o
u
t
p
u
t
.
`
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


 
 
 
 
 
 
 
 
 
 
 
 
.
.
.
v
i
s
i
t
e
d
,


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
a
l
l
S
t
a
c
k
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
 
[
c
.
i
d
,
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
)
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,


 
 
 
 
 
 
 
 
 
 
s
t
a
c
k
:
 
c
a
l
l
S
t
a
c
k
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
 
n
o
d
e
s
[
c
.
i
d
]
.
v
a
l
u
e
)
,


 
 
 
 
 
 
 
 
 
 
q
u
e
u
e
:
 
[
]
,


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
t
o
p
.
p
h
a
s
e
 
=
 
1
;


 
 
 
 
 
 
 
 
i
f
 
(
n
d
.
l
e
f
t
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
 
3
,


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
m
o
d
e
,
 
s
t
a
c
k
D
e
p
t
h
:
 
c
a
l
l
S
t
a
c
k
.
l
e
n
g
t
h
,
 
n
o
d
e
:
 
n
d
.
v
a
l
u
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
R
e
c
u
r
s
e
 
l
e
f
t
 
i
n
t
o
 
$
{
n
o
d
e
s
[
n
d
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
}
.
`
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
.
.
.
v
i
s
i
t
e
d
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
a
l
l
S
t
a
c
k
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
 
[
c
.
i
d
,
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
,


 
 
 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,


 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
c
k
:
 
c
a
l
l
S
t
a
c
k
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
 
n
o
d
e
s
[
c
.
i
d
]
.
v
a
l
u
e
)
,


 
 
 
 
 
 
 
 
 
 
 
 
q
u
e
u
e
:
 
[
]
,


 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
 
 
p
u
s
h
C
a
l
l
(
n
d
.
l
e
f
t
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


 
 
 
 
 
 
}


 
 
 
 
 
 
i
f
 
(
t
o
p
.
p
h
a
s
e
 
=
=
=
 
1
)
 
{


 
 
 
 
 
 
 
 
t
o
p
.
p
h
a
s
e
 
=
 
2
;


 
 
 
 
 
 
 
 
i
f
 
(
n
d
.
r
i
g
h
t
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
 
m
o
d
e
,
 
s
t
a
c
k
D
e
p
t
h
:
 
c
a
l
l
S
t
a
c
k
.
l
e
n
g
t
h
,
 
n
o
d
e
:
 
n
d
.
v
a
l
u
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
R
e
c
u
r
s
e
 
r
i
g
h
t
 
i
n
t
o
 
$
{
n
o
d
e
s
[
n
d
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
}
.
`
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
.
.
.
v
i
s
i
t
e
d
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
a
l
l
S
t
a
c
k
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
 
[
c
.
i
d
,
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
,


 
 
 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,


 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
c
k
:
 
c
a
l
l
S
t
a
c
k
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
 
n
o
d
e
s
[
c
.
i
d
]
.
v
a
l
u
e
)
,


 
 
 
 
 
 
 
 
 
 
 
 
q
u
e
u
e
:
 
[
]
,


 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
 
 
p
u
s
h
C
a
l
l
(
n
d
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
t
i
n
u
e
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}


 
 
 
 
 
 
c
a
l
l
S
t
a
c
k
.
p
o
p
(
)
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
/
/
 
p
o
s
t
o
r
d
e
r


 
 
 
 
 
 
i
f
 
(
t
o
p
.
p
h
a
s
e
 
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
 
1
,


 
 
 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
m
o
d
e
,
 
s
t
a
c
k
D
e
p
t
h
:
 
c
a
l
l
S
t
a
c
k
.
l
e
n
g
t
h
,
 
n
o
d
e
:
 
n
d
.
v
a
l
u
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
E
n
t
e
r
 
p
o
s
t
o
r
d
e
r
(
$
{
n
d
.
v
a
l
u
e
}
)
.
`
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
 
v
i
s
i
t
e
d
M
a
p
,


 
 
 
 
 
 
 
 
 
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,


 
 
 
 
 
 
 
 
 
 
s
t
a
c
k
:
 
c
a
l
l
S
t
a
c
k
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
 
n
o
d
e
s
[
c
.
i
d
]
.
v
a
l
u
e
)
,


 
 
 
 
 
 
 
 
 
 
q
u
e
u
e
:
 
[
]
,


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
t
o
p
.
p
h
a
s
e
 
=
 
1
;


 
 
 
 
 
 
 
 
i
f
 
(
n
d
.
l
e
f
t
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
 
m
o
d
e
,
 
s
t
a
c
k
D
e
p
t
h
:
 
c
a
l
l
S
t
a
c
k
.
l
e
n
g
t
h
,
 
n
o
d
e
:
 
n
d
.
v
a
l
u
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
R
e
c
u
r
s
e
 
l
e
f
t
 
i
n
t
o
 
$
{
n
o
d
e
s
[
n
d
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
}
.
`
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
 
v
i
s
i
t
e
d
M
a
p
,


 
 
 
 
 
 
 
 
 
 
 
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,


 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
c
k
:
 
c
a
l
l
S
t
a
c
k
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
 
n
o
d
e
s
[
c
.
i
d
]
.
v
a
l
u
e
)
,


 
 
 
 
 
 
 
 
 
 
 
 
q
u
e
u
e
:
 
[
]
,


 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
 
 
p
u
s
h
C
a
l
l
(
n
d
.
l
e
f
t
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


 
 
 
 
 
 
}


 
 
 
 
 
 
i
f
 
(
t
o
p
.
p
h
a
s
e
 
=
=
=
 
1
)
 
{


 
 
 
 
 
 
 
 
t
o
p
.
p
h
a
s
e
 
=
 
2
;


 
 
 
 
 
 
 
 
i
f
 
(
n
d
.
r
i
g
h
t
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
 
3
,


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
m
o
d
e
,
 
s
t
a
c
k
D
e
p
t
h
:
 
c
a
l
l
S
t
a
c
k
.
l
e
n
g
t
h
,
 
n
o
d
e
:
 
n
d
.
v
a
l
u
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
R
e
c
u
r
s
e
 
r
i
g
h
t
 
i
n
t
o
 
$
{
n
o
d
e
s
[
n
d
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
}
.
`
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
 
v
i
s
i
t
e
d
M
a
p
,


 
 
 
 
 
 
 
 
 
 
 
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,


 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
c
k
:
 
c
a
l
l
S
t
a
c
k
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
 
n
o
d
e
s
[
c
.
i
d
]
.
v
a
l
u
e
)
,


 
 
 
 
 
 
 
 
 
 
 
 
q
u
e
u
e
:
 
[
]
,


 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
 
 
p
u
s
h
C
a
l
l
(
n
d
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
t
i
n
u
e
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}


 
 
 
 
 
 
i
f
 
(
t
o
p
.
p
h
a
s
e
 
=
=
=
 
2
)
 
{


 
 
 
 
 
 
 
 
o
u
t
p
u
t
.
p
u
s
h
(
n
d
.
v
a
l
u
e
)
;


 
 
 
 
 
 
 
 
v
i
s
i
t
e
d
[
t
o
p
.
i
d
]
 
=
 
"
d
o
n
e
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


 
 
 
 
 
 
 
 
 
 
v
a
r
s
:
 
{


 
 
 
 
 
 
 
 
 
 
 
 
m
o
d
e
,


 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
c
k
D
e
p
t
h
:
 
c
a
l
l
S
t
a
c
k
.
l
e
n
g
t
h
 
-
 
1
,


 
 
 
 
 
 
 
 
 
 
 
 
n
o
d
e
:
 
n
d
.
v
a
l
u
e
,


 
 
 
 
 
 
 
 
 
 
 
 
v
i
s
i
t
e
d
:
 
o
u
t
p
u
t
.
l
e
n
g
t
h
,


 
 
 
 
 
 
 
 
 
 
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
V
i
s
i
t
 
$
{
n
d
.
v
a
l
u
e
}
 
-
 
a
p
p
e
n
d
 
t
o
 
o
u
t
p
u
t
.
`
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


 
 
 
 
 
 
 
 
 
 
 
 
.
.
.
v
i
s
i
t
e
d
,


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
a
l
l
S
t
a
c
k
.
s
l
i
c
e
(
0
,
 
-
1
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
 
[
c
.
i
d
,
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
)
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,


 
 
 
 
 
 
 
 
 
 
s
t
a
c
k
:
 
c
a
l
l
S
t
a
c
k
.
s
l
i
c
e
(
0
,
 
-
1
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
 
n
o
d
e
s
[
c
.
i
d
]
.
v
a
l
u
e
)
,


 
 
 
 
 
 
 
 
 
 
q
u
e
u
e
:
 
[
]
,


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
c
a
l
l
S
t
a
c
k
.
p
o
p
(
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
a
l
l
S
t
a
c
k
.
p
o
p
(
)
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
 
0
,


 
 
 
 
v
a
r
s
:
 
{
 
m
o
d
e
,
 
s
t
a
c
k
D
e
p
t
h
:
 
0
,
 
v
i
s
i
t
e
d
:
 
o
u
t
p
u
t
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
 
`
D
o
n
e
!
 
O
u
t
p
u
t
:
 
[
$
{
o
u
t
p
u
t
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
 
v
i
s
i
t
e
d
,


 
 
 
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,


 
 
 
 
s
t
a
c
k
:
 
[
]
,


 
 
 
 
q
u
e
u
e
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
 
 
O
u
t
p
u
t
 
s
t
r
i
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




f
u
n
c
t
i
o
n
 
O
u
t
p
u
t
S
t
r
i
p
(
{
 
v
a
l
u
e
s
 
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
m
t
-
3
 
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
/
4
0
 
m
i
n
-
h
-
1
0
 
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


 
 
 
 
 
 
 
 
v
i
s
i
t
 
o
r
d
e
r
:


 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
{
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
(
e
m
p
t
y
)
<
/
s
p
a
n
>


 
 
 
 
 
 
)
}


 
 
 
 
 
 
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
 
(


 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
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
p
x
-
2
 
p
y
-
0
.
5
 
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
t
o
n
e
-
9
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
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
v
}


 
 
 
 
 
 
 
 
<
/
s
p
a
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
 
 
S
t
a
c
k
 
/
 
q
u
e
u
e
 
d
i
s
p
l
a
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
a
c
k
D
i
s
p
l
a
y
(
{
 
i
t
e
m
s
,
 
t
i
t
l
e
 
}
:
 
{
 
i
t
e
m
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
 
t
i
t
l
e
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
1
 
m
i
n
-
w
-
2
0
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
{
t
i
t
l
e
}
<
/
s
p
a
n
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
-
r
e
v
e
r
s
e
 
g
a
p
-
1
"
>


 
 
 
 
 
 
 
 
{
i
t
e
m
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
 
p
x
-
2
 
p
y
-
1
"
>
e
m
p
t
y
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
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
v
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
p
x
-
3
 
p
y
-
1
 
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




f
u
n
c
t
i
o
n
 
Q
u
e
u
e
D
i
s
p
l
a
y
(
{
 
i
t
e
m
s
,
 
t
i
t
l
e
 
}
:
 
{
 
i
t
e
m
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
 
t
i
t
l
e
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
1
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
{
t
i
t
l
e
}
<
/
s
p
a
n
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


 
 
 
 
 
 
 
 
{
i
t
e
m
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
 
p
x
-
2
 
p
y
-
1
"
>
e
m
p
t
y
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
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
v
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
p
x
-
3
 
p
y
-
1
 
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


 
 
 
 
 
 
 
 
 
 
 
 
{
v
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
M
o
d
e
>
(
"
i
n
o
r
d
e
r
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
L
e
v
e
l
O
r
d
e
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
 
t
r
e
e
 
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
T
r
e
e
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
r
e
e
,
 
m
o
d
e
)
,
 
[
t
r
e
e
,
 
m
o
d
e
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
"
>


 
 
 
 
 
 
 
 
{
(
[
"
i
n
o
r
d
e
r
"
,
 
"
p
r
e
o
r
d
e
r
"
,
 
"
p
o
s
t
o
r
d
e
r
"
,
 
"
l
e
v
e
l
o
r
d
e
r
"
]
 
a
s
 
M
o
d
e
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
m
)
}
 
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
 
m
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
x
s
 
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
m
 
=
=
=
 
"
l
e
v
e
l
o
r
d
e
r
"
 
?
 
"
L
e
v
e
l
-
o
r
d
e
r
 
(
B
F
S
)
"
 
:
 
m
.
c
h
a
r
A
t
(
0
)
.
t
o
U
p
p
e
r
C
a
s
e
(
)
 
+
 
m
.
s
l
i
c
e
(
1
)
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
a
v
e
r
s
a
l
,
 
$
{
m
o
d
e
 
=
=
=
 
"
l
e
v
e
l
o
r
d
e
r
"
 
?
 
"
B
F
S
"
 
:
 
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
L
e
v
e
l
-
o
r
d
e
r
 
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
 
1
,
2
,
3
,
n
u
l
l
,
4
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
.
 
U
s
e
 
n
u
l
l
 
t
o
 
s
k
i
p
 
a
 
s
l
o
t
 
(
L
e
e
t
C
o
d
e
-
s
t
y
l
e
)
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
B
a
l
a
n
c
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
k
e
w
e
d
 
l
e
f
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
1
,
2
,
n
u
l
l
,
3
,
n
u
l
l
,
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
S
p
a
r
s
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
1
,
2
,
3
,
n
u
l
l
,
4
,
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
S
i
n
g
l
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
4
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
L
e
v
e
l
O
r
d
e
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
[
m
o
d
e
]
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


 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
`
$
{
m
o
d
e
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
`
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
 
g
a
p
-
4
 
i
t
e
m
s
-
s
t
a
r
t
 
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
-
1
 
m
i
n
-
w
-
6
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
T
r
e
e
V
i
z


 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
o
d
e
s
=
{
t
r
e
e
.
n
o
d
e
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
o
t
=
{
t
r
e
e
.
r
o
o
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
f
r
a
m
e
?
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
 
?
?
 
{
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
4
8
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
2
6
0
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
O
u
t
p
u
t
S
t
r
i
p
 
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
?
.
o
u
t
p
u
t
 
?
?
 
[
]
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
s
h
r
i
n
k
-
0
"
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
l
e
v
e
l
o
r
d
e
r
"
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
Q
u
e
u
e
D
i
s
p
l
a
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
t
e
m
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
q
u
e
u
e
 
?
?
 
[
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
B
F
S
 
Q
u
e
u
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
t
a
c
k
D
i
s
p
l
a
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
t
e
m
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
s
t
a
c
k
 
?
?
 
[
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
C
a
l
l
 
S
t
a
c
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
m
t
-
3
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
I
n
o
r
d
e
r
 
(
L
e
f
t
,
 
R
o
o
t
,
 
R
i
g
h
t
)
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
 
a
 
B
S
T
,
 
i
n
o
r
d
e
r
 
v
i
s
i
t
s
 
n
o
d
e
s
 
i
n
 
s
o
r
t
e
d
 
o
r
d
e
r
.
 
U
s
e
d
 
h
e
a
v
i
l
y
 
i
n
 
e
x
p
r
e
s
s
i
o
n
 
t
r
e
e
 
e
v
a
l
u
a
t
i
o
n
.
"
,


 
 
 
 
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
o
r
d
e
r
 
(
R
o
o
t
,
 
L
e
f
t
,
 
R
i
g
h
t
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
o
n
e
s
/
s
e
r
i
a
l
i
z
e
s
 
a
 
t
r
e
e
.
 
Y
o
u
 
v
i
s
i
t
 
a
 
p
a
r
e
n
t
 
b
e
f
o
r
e
 
i
t
s
 
c
h
i
l
d
r
e
n
,
 
s
o
 
r
e
c
o
n
s
t
r
u
c
t
i
o
n
 
i
s
 
s
t
r
a
i
g
h
t
f
o
r
w
a
r
d
.
"
,


 
 
 
 
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
s
t
o
r
d
e
r
 
(
L
e
f
t
,
 
R
i
g
h
t
,
 
R
o
o
t
)
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
D
e
l
e
t
e
 
o
r
 
c
o
m
p
u
t
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
s
:
 
c
h
i
l
d
r
e
n
 
a
r
e
 
f
i
n
i
s
h
e
d
 
b
e
f
o
r
e
 
t
h
e
 
p
a
r
e
n
t
 
a
c
t
s
.
 
U
s
e
d
 
i
n
 
e
x
p
r
e
s
s
i
o
n
 
e
v
a
l
u
a
t
i
o
n
 
a
n
d
 
t
r
e
e
 
D
P
.
"
,


 
 
 
 
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
e
v
e
l
-
o
r
d
e
r
 
(
B
F
S
)
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
V
i
s
i
t
s
 
b
y
 
d
e
p
t
h
 
l
e
v
e
l
.
 
U
s
e
s
 
a
 
F
I
F
O
 
q
u
e
u
e
.
 
U
s
e
d
 
f
o
r
 
s
h
o
r
t
e
s
t
 
u
n
w
e
i
g
h
t
e
d
 
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
 
a
n
d
 
l
e
v
e
l
-
w
i
s
e
 
s
u
m
m
a
r
i
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
w
h
y
 
f
o
u
r
 
t
r
a
v
e
r
s
a
l
s
?
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
i
c
k
 
a
n
 
o
r
d
e
r
 
t
o
 
v
i
s
i
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
c
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
e
e
 
i
s
 
n
o
n
-
l
i
n
e
a
r
.
 
T
o
 
p
r
o
c
e
s
s
 
e
v
e
r
y
 
n
o
d
e
 
e
x
a
c
t
l
y
 
o
n
c
e
,
 
y
o
u
 
m
u
s
t
 
p
i
c
k
 
a
n
 
o
r
d
e
r
.
 
D
F
S
 
h
a
s


 
 
 
 
 
 
 
 
 
 
t
h
r
e
e
 
n
a
t
u
r
a
l
 
v
a
r
i
a
n
t
s
 
b
a
s
e
d
 
o
n
 
w
h
e
n
 
y
o
u
 
v
i
s
i
t
 
t
h
e
 
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
 
(
b
e
f
o
r
e
,
 
b
e
t
w
e
e
n
,
 
o
r
 
a
f
t
e
r


 
 
 
 
 
 
 
 
 
 
r
e
c
u
r
s
i
n
g
)
.
 
B
F
S
 
i
s
 
t
h
e
 
f
o
u
r
t
h
,
 
l
e
v
e
l
-
b
y
-
l
e
v
e
l
 
u
s
i
n
g
 
a
 
q
u
e
u
e
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
 
m
b
-
2
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
I
n
o
r
d
e
r
 
o
f
 
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
]
"
,
 
a
:
 
"
4
,
2
,
5
,
1
,
6
,
3
,
7
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
o
r
d
e
r
 
o
f
 
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
]
"
,
 
a
:
 
"
1
,
2
,
4
,
5
,
3
,
6
,
7
"
 
}
,


 
 
 
 
{
 
q
:
 
"
P
o
s
t
o
r
d
e
r
 
o
f
 
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
]
"
,
 
a
:
 
"
4
,
5
,
2
,
6
,
7
,
3
,
1
"
 
}
,


 
 
 
 
{
 
q
:
 
"
L
e
v
e
l
-
o
r
d
e
r
 
o
f
 
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
]
"
,
 
a
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


 
 
 
 
 
 
 
 
T
r
e
e
:
 
r
o
o
t
=
1
,
 
c
h
i
l
d
r
e
n
 
2
 
&
a
m
p
;
 
3
,
 
t
h
e
n
 
4
,
5
 
u
n
d
e
r
 
2
 
a
n
d
 
6
,
7
 
u
n
d
e
r
 
3
.
 
W
r
i
t
e
 
e
a
c
h
 
t
r
a
v
e
r
s
a
l
.


 
 
 
 
 
 
 
 
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
 
=
 
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
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
v
e
a
l
e
d
 
=
 
s
h
o
w
n
[
i
]
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
4
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
0
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
1
0
0
 
f
l
e
x
-
1
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
e
.
g
.
 
1
,
2
,
3
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
2
 
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
x
s
 
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
r
e
v
e
a
l
e
d
 
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
 
`
C
o
r
r
e
c
t
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
h
e
 
c
a
l
l
-
s
t
a
c
k
 
i
s
 
t
h
e
 
r
e
c
u
r
s
i
o
n
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


 
 
 
 
 
 
 
 
 
 
E
v
e
r
y
 
D
F
S
 
t
r
a
v
e
r
s
a
l
 
r
u
n
s
 
o
n
 
a
 
s
t
a
c
k
,
 
e
i
t
h
e
r
 
t
h
e
 
i
m
p
l
i
c
i
t
 
c
a
l
l
 
s
t
a
c
k
 
(
r
e
c
u
r
s
i
o
n
)
 
o
r
 
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
 
S
t
a
c
k
.
 
B
F
S
 
a
l
w
a
y
s
 
u
s
e
s
 
a
 
Q
u
e
u
e
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
 
s
t
a
c
k
s
-
v
s
-
q
u
e
u
e
s
 
i
s
 
a
 
f
r
e
q
u
e
n
t


 
 
 
 
 
 
 
 
 
 
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
 
d
i
s
g
u
i
s
e
d
 
a
s
 
t
r
a
v
e
r
s
a
l
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
R
e
c
o
n
s
t
r
u
c
t
i
o
n
 
r
u
l
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


 
 
 
 
 
 
 
 
 
 
A
 
s
i
n
g
l
e
 
t
r
a
v
e
r
s
a
l
 
i
s
 
a
m
b
i
g
u
o
u
s
,
 
b
u
t
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
<
e
m
>
p
r
e
o
r
d
e
r
 
+
 
i
n
o
r
d
e
r
<
/
e
m
>
 
(
o
r
 
<
e
m
>
p
o
s
t
o
r
d
e
r
 
+
 
i
n
o
r
d
e
r
<
/
e
m
>
)
 
u
n
i
q
u
e
l
y
 
r
e
c
o
n
s
t
r
u
c
t
s
 
t
h
e


 
 
 
 
 
 
 
 
 
 
t
r
e
e
.
 
P
r
e
o
r
d
e
r
 
a
l
o
n
e
 
o
r
 
p
o
s
t
o
r
d
e
r
 
a
l
o
n
e
 
d
o
e
s
 
n
o
t
.
 
T
h
i
s
 
s
h
o
w
s
 
u
p
 
o
f
t
e
n
 
i
n
 
i
n
t
e
r
v
i
e
w
s
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


 
 
 
 
 
 
 
 
 
 
E
v
e
r
y
 
t
r
a
v
e
r
s
a
l
 
v
i
s
i
t
s
 
e
a
c
h
 
n
o
d
e
 
e
x
a
c
t
l
y
 
o
n
c
e
 
s
o
 
O
(
n
)
 
t
i
m
e
.
 
S
p
a
c
e
 
i
s
 
O
(
h
)
 
f
o
r
 
D
F
S


 
 
 
 
 
 
 
 
 
 
(
h
 
=
 
h
e
i
g
h
t
)
 
a
n
d
 
O
(
w
)
 
f
o
r
 
B
F
S
 
(
w
 
=
 
m
a
x
 
w
i
d
t
h
)
.
 
F
o
r
 
a
 
s
k
e
w
e
d
 
t
r
e
e
 
D
F
S
 
i
s
 
O
(
n
)
;
 
f
o
r
 
a


 
 
 
 
 
 
 
 
 
 
b
a
l
a
n
c
e
d
 
t
r
e
e
 
i
t
 
i
s
 
O
(
l
o
g
 
n
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
s
s
o
n
 
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
B
i
n
a
r
y
T
r
e
e
T
r
a
v
e
r
s
a
l
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
,


 
 
 
 
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
,


 
 
 
 
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
i
c
h
 
t
r
a
v
e
r
s
a
l
 
o
f
 
a
 
B
S
T
 
y
i
e
l
d
s
 
t
h
e
 
k
e
y
s
 
i
n
 
s
o
r
t
e
d
 
(
a
s
c
e
n
d
i
n
g
)
 
o
r
d
e
r
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
P
r
e
o
r
d
e
r
"
,
 
"
I
n
o
r
d
e
r
"
,
 
"
P
o
s
t
o
r
d
e
r
"
,
 
"
L
e
v
e
l
-
o
r
d
e
r
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
I
n
 
a
 
B
S
T
,
 
l
e
f
t
 
s
u
b
t
r
e
e
 
<
 
n
o
d
e
 
<
 
r
i
g
h
t
 
s
u
b
t
r
e
e
.
 
I
n
o
r
d
e
r
 
(
L
,
 
N
,
 
R
)
 
r
e
a
d
s
 
k
e
y
s
 
i
n
 
a
s
c
e
n
d
i
n
g
 
o
r
d
e
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
W
h
i
c
h
 
d
a
t
a
 
s
t
r
u
c
t
u
r
e
 
i
s
 
t
h
e
 
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
 
d
r
i
v
e
r
 
o
f
 
l
e
v
e
l
-
o
r
d
e
r
 
t
r
a
v
e
r
s
a
l
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
S
t
a
c
k
"
,
 
"
Q
u
e
u
e
"
,
 
"
P
r
i
o
r
i
t
y
 
q
u
e
u
e
"
,
 
"
H
a
s
h
 
m
a
p
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
B
F
S
 
u
s
e
s
 
a
 
F
I
F
O
 
q
u
e
u
e
 
s
o
 
n
o
d
e
s
 
a
r
e
 
p
r
o
c
e
s
s
e
d
 
i
n
 
t
h
e
 
o
r
d
e
r
 
t
h
e
y
 
w
e
r
e
 
d
i
s
c
o
v
e
r
e
d
,
 
l
e
v
e
l
 
b
y
 
l
e
v
e
l
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
G
i
v
e
n
 
p
r
e
o
r
d
e
r
 
=
 
[
1
,
2
,
4
,
5
,
3
,
6
,
7
]
 
a
n
d
 
i
n
o
r
d
e
r
 
=
 
[
4
,
2
,
5
,
1
,
6
,
3
,
7
]
,
 
w
h
a
t
 
i
s
 
t
h
e
 
p
o
s
t
o
r
d
e
r
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
[
4
,
5
,
2
,
6
,
7
,
3
,
1
]
"
,


 
 
 
 
 
 
 
 
"
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
]
"
,


 
 
 
 
 
 
 
 
"
[
4
,
2
,
5
,
6
,
3
,
7
,
1
]
"
,


 
 
 
 
 
 
 
 
"
[
7
,
6
,
3
,
5
,
4
,
2
,
1
]
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
R
e
c
o
n
s
t
r
u
c
t
:
 
r
o
o
t
=
1
,
 
l
e
f
t
 
s
u
b
t
r
e
e
 
{
2
,
4
,
5
}
,
 
r
i
g
h
t
 
{
3
,
6
,
7
}
.
 
P
o
s
t
o
r
d
e
r
 
i
s
 
L
-
R
-
N
 
p
e
r
 
s
u
b
t
r
e
e
 
-
>
 
[
4
,
5
,
2
,
6
,
7
,
3
,
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
M
i
n
i
m
u
m
 
e
x
t
r
a
 
s
p
a
c
e
 
n
e
e
d
e
d
 
f
o
r
 
i
t
e
r
a
t
i
v
e
 
i
n
o
r
d
e
r
 
o
n
 
a
 
t
r
e
e
 
o
f
 
h
e
i
g
h
t
 
h
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
h
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
Y
o
u
 
m
u
s
t
 
r
e
m
e
m
b
e
r
 
t
h
e
 
a
n
c
e
s
t
o
r
 
c
h
a
i
n
 
t
o
 
r
e
t
u
r
n
 
t
o
 
a
f
t
e
r
 
v
i
s
i
t
i
n
g
 
t
h
e
 
l
e
f
t
 
s
u
b
t
r
e
e
 
-
 
t
h
a
t
 
n
e
e
d
s
 
O
(
h
)
 
s
t
a
c
k
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
 
T
r
e
e
 
T
r
a
v
e
r
s
a
l
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
1
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
E
v
e
r
y
 
t
r
e
e
 
i
n
t
e
r
v
i
e
w
 
s
t
a
r
t
s
 
h
e
r
e
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


