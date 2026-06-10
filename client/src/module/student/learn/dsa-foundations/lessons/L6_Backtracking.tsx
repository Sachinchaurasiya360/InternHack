
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
 
R
e
c
u
r
s
i
o
n
N
o
d
e
 
+
 
R
e
c
u
r
s
i
o
n
T
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




i
n
t
e
r
f
a
c
e
 
R
e
c
u
r
s
i
o
n
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


 
 
l
a
b
e
l
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
?
:
 
s
t
r
i
n
g
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
;


 
 
s
t
a
t
e
:
 
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
d
o
n
e
"
;


 
 
r
e
t
u
r
n
V
a
l
u
e
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




f
u
n
c
t
i
o
n
 
R
e
c
u
r
s
i
o
n
T
r
e
e
(
{
 
n
o
d
e
s
,
 
a
c
t
i
v
e
I
d
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
 
n
o
d
e
s
:
 
R
e
c
u
r
s
i
o
n
N
o
d
e
[
]
;
 
a
c
t
i
v
e
I
d
?
:
 
s
t
r
i
n
g
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
 
}
}
>


 
 
 
 
 
 
T
r
e
e
 
w
i
l
l
 
a
p
p
e
a
r
 
a
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
 
r
u
n
s
.


 
 
 
 
<
/
d
i
v
>


 
 
)
;




 
 
c
o
n
s
t
 
W
 
=
 
5
0
0
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
R
 
=
 
1
6
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
H
 
=
 
5
4
;




 
 
c
o
n
s
t
 
b
y
D
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
n
u
m
b
e
r
,
 
R
e
c
u
r
s
i
o
n
N
o
d
e
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
c
o
n
s
t
 
n
 
o
f
 
n
o
d
e
s
)
 
{


 
 
 
 
i
f
 
(
!
b
y
D
e
p
t
h
[
n
.
d
e
p
t
h
]
)
 
b
y
D
e
p
t
h
[
n
.
d
e
p
t
h
]
 
=
 
[
]
;


 
 
 
 
b
y
D
e
p
t
h
[
n
.
d
e
p
t
h
]
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
 
n
.
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
 
g
r
o
u
p
 
=
 
b
y
D
e
p
t
h
[
d
]
 
?
?
 
[
]
;


 
 
 
 
g
r
o
u
p
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
n
.
i
d
]
 
=
 
{
 
x
:
 
(
W
 
/
 
(
g
r
o
u
p
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
)
 
*
 
(
i
 
+
 
1
)
,
 
y
:
 
2
6
 
+
 
d
 
*
 
l
e
v
e
l
H
 
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
 
e
d
g
e
s
:
 
{
 
x
1
:
 
n
u
m
b
e
r
;
 
y
1
:
 
n
u
m
b
e
r
;
 
x
2
:
 
n
u
m
b
e
r
;
 
y
2
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
c
o
n
s
t
 
n
 
o
f
 
n
o
d
e
s
)
 
{


 
 
 
 
i
f
 
(
n
.
p
a
r
e
n
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
p
a
r
e
n
t
]
 
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
i
d
]
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
p
 
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
p
a
r
e
n
t
]
;


 
 
 
 
 
 
c
o
n
s
t
 
c
 
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
 
x
1
:
 
p
.
x
,
 
y
1
:
 
p
.
y
 
+
 
n
o
d
e
R
,
 
x
2
:
 
c
.
x
,
 
y
2
:
 
c
.
y
 
-
 
n
o
d
e
R
 
}
)
;


 
 
 
 
}


 
 
}




 
 
c
o
n
s
t
 
s
v
g
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
h
e
i
g
h
t
,
 
(
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
)
 
*
 
l
e
v
e
l
H
 
+
 
5
0
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
"
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
s
v
g
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
s
v
g
H
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
b
l
o
c
k
"
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
e
,
 
i
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
i
}
 
x
1
=
{
e
.
x
1
}
 
y
1
=
{
e
.
y
1
}
 
x
2
=
{
e
.
x
2
}
 
y
2
=
{
e
.
y
2
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
 
p
o
s
 
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
p
o
s
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
 
i
s
A
c
t
i
v
e
 
=
 
n
.
i
d
 
=
=
=
 
a
c
t
i
v
e
I
d
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
 
n
.
r
e
t
u
r
n
V
a
l
u
e
 
=
=
=
 
"
✗
"
 
?
 
"
#
e
f
4
4
4
4
"
 
:
 
n
.
s
t
a
t
e
 
=
=
=
 
"
d
o
n
e
"
 
?
 
"
#
1
0
b
9
8
1
"
 
:
 
i
s
A
c
t
i
v
e
 
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
o
s
.
x
}
 
c
y
=
{
p
o
s
.
y
}
 
r
=
{
n
o
d
e
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
"
#
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
2
5
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
p
o
s
.
x
}
 
y
=
{
p
o
s
.
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
"
8
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
p
o
i
n
t
e
r
E
v
e
n
t
s
:
 
"
n
o
n
e
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
n
.
l
a
b
e
l
.
l
e
n
g
t
h
 
>
 
7
 
?
 
n
.
l
a
b
e
l
.
s
l
i
c
e
(
0
,
 
6
)
 
+
 
"
…
"
 
:
 
n
.
l
a
b
e
l
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
 
 
N
-
Q
u
e
e
n
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
 
Q
u
e
e
n
s
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


 
 
b
o
a
r
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


 
 
r
o
w
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
y
i
n
g
C
o
l
:
 
n
u
m
b
e
r
;


 
 
c
o
n
f
l
i
c
t
?
:
 
{
 
k
i
n
d
:
 
"
r
o
w
"
 
|
 
"
c
o
l
"
 
|
 
"
d
i
a
g
"
;
 
r
:
 
n
u
m
b
e
r
;
 
c
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
;


 
 
n
o
d
e
s
:
 
R
e
c
u
r
s
i
o
n
N
o
d
e
[
]
;


 
 
a
c
t
i
v
e
I
d
?
:
 
s
t
r
i
n
g
;


 
 
s
o
l
u
t
i
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


 
 
t
o
t
a
l
T
r
i
e
s
:
 
n
u
m
b
e
r
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
Q
U
E
E
N
S
 
=
 
[


 
 
"
s
o
l
v
e
(
r
o
w
)
:
"
,


 
 
"
 
 
i
f
 
r
o
w
 
=
=
 
n
:
 
r
e
c
o
r
d
 
s
o
l
u
t
i
o
n
"
,


 
 
"
 
 
f
o
r
 
c
o
l
 
i
n
 
0
.
.
n
-
1
:
"
,


 
 
"
 
 
 
 
i
f
 
s
a
f
e
(
r
o
w
,
 
c
o
l
)
:
"
,


 
 
"
 
 
 
 
 
 
p
l
a
c
e
 
q
u
e
e
n
 
a
t
 
(
r
o
w
,
 
c
o
l
)
"
,


 
 
"
 
 
 
 
 
 
s
o
l
v
e
(
r
o
w
 
+
 
1
)
"
,


 
 
"
 
 
 
 
 
 
r
e
m
o
v
e
 
q
u
e
e
n
 
 
/
/
 
b
a
c
k
t
r
a
c
k
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
u
i
l
d
Q
u
e
e
n
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
 
Q
u
e
e
n
s
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
 
Q
u
e
e
n
s
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
o
a
r
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
-
1
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
s
:
 
R
e
c
u
r
s
i
o
n
N
o
d
e
[
]
 
=
 
[
]
;


 
 
l
e
t
 
i
d
C
o
u
n
t
e
r
 
=
 
0
;


 
 
l
e
t
 
s
o
l
u
t
i
o
n
s
 
=
 
0
;


 
 
l
e
t
 
t
o
t
a
l
T
r
i
e
s
 
=
 
0
;


 
 
c
o
n
s
t
 
s
t
o
p
A
t
 
=
 
1
6
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
 
s
a
f
e
(
r
o
w
:
 
n
u
m
b
e
r
,
 
c
o
l
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
 
c
o
n
f
l
i
c
t
:
 
Q
u
e
e
n
s
F
r
a
m
e
[
"
c
o
n
f
l
i
c
t
"
]
 
}
 
{


 
 
 
 
f
o
r
 
(
l
e
t
 
r
 
=
 
0
;
 
r
 
<
 
r
o
w
;
 
r
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
 
=
 
b
o
a
r
d
[
r
]
;


 
 
 
 
 
 
i
f
 
(
c
 
=
=
=
 
c
o
l
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
 
c
o
n
f
l
i
c
t
:
 
{
 
k
i
n
d
:
 
"
c
o
l
"
,
 
r
,
 
c
 
}
 
}
;


 
 
 
 
 
 
i
f
 
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
c
 
-
 
c
o
l
)
 
=
=
=
 
M
a
t
h
.
a
b
s
(
r
 
-
 
r
o
w
)
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
 
c
o
n
f
l
i
c
t
:
 
{
 
k
i
n
d
:
 
"
d
i
a
g
"
,
 
r
,
 
c
 
}
 
}
;


 
 
 
 
}


 
 
 
 
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
 
t
r
u
e
,
 
c
o
n
f
l
i
c
t
:
 
n
u
l
l
 
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
 
s
n
a
p
(
f
:
 
O
m
i
t
<
Q
u
e
e
n
s
F
r
a
m
e
,
 
"
n
o
d
e
s
"
 
|
 
"
b
o
a
r
d
"
>
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
 
.
.
.
f
,
 
b
o
a
r
d
:
 
[
.
.
.
b
o
a
r
d
]
,
 
n
o
d
e
s
:
 
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
x
)
 
=
>
 
(
{
 
.
.
.
x
 
}
)
)
 
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
 
r
e
c
u
r
s
e
(
r
o
w
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
,
 
p
a
r
e
n
t
?
:
 
s
t
r
i
n
g
)
:
 
b
o
o
l
e
a
n
 
{


 
 
 
 
i
f
 
(
f
r
a
m
e
s
.
l
e
n
g
t
h
 
>
=
 
s
t
o
p
A
t
)
 
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
;


 
 
 
 
c
o
n
s
t
 
i
d
 
=
 
`
q
-
$
{
i
d
C
o
u
n
t
e
r
+
+
}
`
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
:
 
R
e
c
u
r
s
i
o
n
N
o
d
e
 
=
 
{
 
i
d
,
 
l
a
b
e
l
:
 
`
r
o
w
 
$
{
r
o
w
}
`
,
 
p
a
r
e
n
t
,
 
d
e
p
t
h
,
 
s
t
a
t
e
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
n
o
d
e
)
;




 
 
 
 
s
n
a
p
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
 
r
o
w
,
 
s
o
l
u
t
i
o
n
s
,
 
t
r
i
e
s
:
 
t
o
t
a
l
T
r
i
e
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
E
n
t
e
r
 
s
o
l
v
e
(
r
o
w
=
$
{
r
o
w
}
)
.
`
,
 
r
o
w
,
 
t
r
y
i
n
g
C
o
l
:
 
-
1
,
 
c
o
n
f
l
i
c
t
:
 
n
u
l
l
,
 
a
c
t
i
v
e
I
d
:
 
i
d
,
 
s
o
l
u
t
i
o
n
s
,
 
t
o
t
a
l
T
r
i
e
s
 
}
)
;




 
 
 
 
i
f
 
(
r
o
w
 
=
=
=
 
n
)
 
{


 
 
 
 
 
 
s
o
l
u
t
i
o
n
s
+
+
;


 
 
 
 
 
 
n
o
d
e
.
r
e
t
u
r
n
V
a
l
u
e
 
=
 
"
✓
"
;


 
 
 
 
 
 
n
o
d
e
.
s
t
a
t
e
 
=
 
"
d
o
n
e
"
;


 
 
 
 
 
 
s
n
a
p
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
 
r
o
w
,
 
s
o
l
u
t
i
o
n
s
,
 
t
r
i
e
s
:
 
t
o
t
a
l
T
r
i
e
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
w
 
$
{
n
}
 
r
e
a
c
h
e
d
 
→
 
f
u
l
l
 
s
o
l
u
t
i
o
n
 
#
$
{
s
o
l
u
t
i
o
n
s
}
 
f
o
u
n
d
.
`
,
 
r
o
w
,
 
t
r
y
i
n
g
C
o
l
:
 
-
1
,
 
c
o
n
f
l
i
c
t
:
 
n
u
l
l
,
 
a
c
t
i
v
e
I
d
:
 
i
d
,
 
s
o
l
u
t
i
o
n
s
,
 
t
o
t
a
l
T
r
i
e
s
 
}
)
;


 
 
 
 
 
 
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
;


 
 
 
 
}




 
 
 
 
f
o
r
 
(
l
e
t
 
c
o
l
 
=
 
0
;
 
c
o
l
 
<
 
n
;
 
c
o
l
+
+
)
 
{


 
 
 
 
 
 
i
f
 
(
f
r
a
m
e
s
.
l
e
n
g
t
h
 
>
=
 
s
t
o
p
A
t
)
 
b
r
e
a
k
;


 
 
 
 
 
 
t
o
t
a
l
T
r
i
e
s
+
+
;


 
 
 
 
 
 
s
n
a
p
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
 
r
o
w
,
 
c
o
l
,
 
t
r
i
e
s
:
 
t
o
t
a
l
T
r
i
e
s
,
 
s
o
l
u
t
i
o
n
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
T
r
y
 
c
o
l
u
m
n
 
$
{
c
o
l
}
 
i
n
 
r
o
w
 
$
{
r
o
w
}
.
`
,
 
r
o
w
,
 
t
r
y
i
n
g
C
o
l
:
 
c
o
l
,
 
c
o
n
f
l
i
c
t
:
 
n
u
l
l
,
 
a
c
t
i
v
e
I
d
:
 
i
d
,
 
s
o
l
u
t
i
o
n
s
,
 
t
o
t
a
l
T
r
i
e
s
 
}
)
;


 
 
 
 
 
 
c
o
n
s
t
 
c
h
e
c
k
 
=
 
s
a
f
e
(
r
o
w
,
 
c
o
l
)
;


 
 
 
 
 
 
i
f
 
(
!
c
h
e
c
k
.
o
k
)
 
{


 
 
 
 
 
 
 
 
s
n
a
p
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
 
r
o
w
,
 
c
o
l
,
 
t
r
i
e
s
:
 
t
o
t
a
l
T
r
i
e
s
,
 
s
o
l
u
t
i
o
n
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
C
o
n
f
l
i
c
t
 
w
i
t
h
 
q
u
e
e
n
 
a
t
 
(
$
{
c
h
e
c
k
.
c
o
n
f
l
i
c
t
!
.
r
}
,
 
$
{
c
h
e
c
k
.
c
o
n
f
l
i
c
t
!
.
c
}
)
 
v
i
a
 
$
{
c
h
e
c
k
.
c
o
n
f
l
i
c
t
!
.
k
i
n
d
}
.
 
S
k
i
p
.
`
,
 
r
o
w
,
 
t
r
y
i
n
g
C
o
l
:
 
c
o
l
,
 
c
o
n
f
l
i
c
t
:
 
c
h
e
c
k
.
c
o
n
f
l
i
c
t
,
 
a
c
t
i
v
e
I
d
:
 
i
d
,
 
s
o
l
u
t
i
o
n
s
,
 
t
o
t
a
l
T
r
i
e
s
 
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


 
 
 
 
 
 
b
o
a
r
d
[
r
o
w
]
 
=
 
c
o
l
;


 
 
 
 
 
 
s
n
a
p
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
 
r
o
w
,
 
c
o
l
,
 
t
r
i
e
s
:
 
t
o
t
a
l
T
r
i
e
s
,
 
s
o
l
u
t
i
o
n
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
a
f
e
.
 
P
l
a
c
e
 
q
u
e
e
n
 
a
t
 
(
$
{
r
o
w
}
,
 
$
{
c
o
l
}
)
.
`
,
 
r
o
w
,
 
t
r
y
i
n
g
C
o
l
:
 
c
o
l
,
 
c
o
n
f
l
i
c
t
:
 
n
u
l
l
,
 
a
c
t
i
v
e
I
d
:
 
i
d
,
 
s
o
l
u
t
i
o
n
s
,
 
t
o
t
a
l
T
r
i
e
s
 
}
)
;


 
 
 
 
 
 
s
n
a
p
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
 
r
o
w
,
 
c
o
l
,
 
t
r
i
e
s
:
 
t
o
t
a
l
T
r
i
e
s
,
 
s
o
l
u
t
i
o
n
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
e
c
u
r
s
e
 
i
n
t
o
 
r
o
w
 
$
{
r
o
w
 
+
 
1
}
.
`
,
 
r
o
w
,
 
t
r
y
i
n
g
C
o
l
:
 
c
o
l
,
 
c
o
n
f
l
i
c
t
:
 
n
u
l
l
,
 
a
c
t
i
v
e
I
d
:
 
i
d
,
 
s
o
l
u
t
i
o
n
s
,
 
t
o
t
a
l
T
r
i
e
s
 
}
)
;


 
 
 
 
 
 
r
e
c
u
r
s
e
(
r
o
w
 
+
 
1
,
 
d
e
p
t
h
 
+
 
1
,
 
i
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
s
.
l
e
n
g
t
h
 
>
=
 
s
t
o
p
A
t
)
 
b
r
e
a
k
;


 
 
 
 
 
 
i
f
 
(
s
o
l
u
t
i
o
n
s
 
>
=
 
1
 
&
&
 
n
 
>
=
 
5
)
 
b
r
e
a
k
;


 
 
 
 
 
 
b
o
a
r
d
[
r
o
w
]
 
=
 
-
1
;


 
 
 
 
 
 
s
n
a
p
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
 
r
o
w
,
 
c
o
l
,
 
t
r
i
e
s
:
 
t
o
t
a
l
T
r
i
e
s
,
 
s
o
l
u
t
i
o
n
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
B
a
c
k
t
r
a
c
k
:
 
r
e
m
o
v
e
 
q
u
e
e
n
 
f
r
o
m
 
(
$
{
r
o
w
}
,
 
$
{
c
o
l
}
)
.
`
,
 
r
o
w
,
 
t
r
y
i
n
g
C
o
l
:
 
c
o
l
,
 
c
o
n
f
l
i
c
t
:
 
n
u
l
l
,
 
a
c
t
i
v
e
I
d
:
 
i
d
,
 
s
o
l
u
t
i
o
n
s
,
 
t
o
t
a
l
T
r
i
e
s
 
}
)
;


 
 
 
 
}




 
 
 
 
n
o
d
e
.
s
t
a
t
e
 
=
 
"
d
o
n
e
"
;


 
 
 
 
n
o
d
e
.
r
e
t
u
r
n
V
a
l
u
e
 
=
 
b
o
a
r
d
[
r
o
w
]
 
!
=
=
 
-
1
 
?
 
"
✓
"
 
:
 
"
✗
"
;


 
 
 
 
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
;


 
 
}




 
 
r
e
c
u
r
s
e
(
0
,
 
0
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
e
n
s
B
o
a
r
d
(
{
 
f
r
a
m
e
,
 
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
 
Q
u
e
e
n
s
F
r
a
m
e
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
 
s
i
z
e
 
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
3
2
0
 
/
 
n
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
o
r
d
e
r
-
2
 
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
s
t
o
n
e
-
6
0
0
 
r
o
u
n
d
e
d
 
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
"


 
 
 
 
 
 
 
 
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
g
r
i
d
"
,
 
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
 
`
r
e
p
e
a
t
(
$
{
n
}
,
 
$
{
s
i
z
e
}
p
x
)
`
,
 
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
R
o
w
s
:
 
`
r
e
p
e
a
t
(
$
{
n
}
,
 
$
{
s
i
z
e
}
p
x
)
`
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
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
)
.
f
l
a
t
M
a
p
(
(
_
,
 
r
)
 
=
>


 
 
 
 
 
 
 
 
 
 
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
)
.
m
a
p
(
(
_
,
 
c
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
L
i
g
h
t
 
=
 
(
r
 
+
 
c
)
 
%
 
2
 
=
=
=
 
0
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
q
u
e
e
n
 
=
 
f
r
a
m
e
.
b
o
a
r
d
[
r
]
 
=
=
=
 
c
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
T
r
y
i
n
g
 
=
 
r
 
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
w
 
&
&
 
c
 
=
=
=
 
f
r
a
m
e
.
t
r
y
i
n
g
C
o
l
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
n
f
l
i
c
t
 
=
 
f
r
a
m
e
.
c
o
n
f
l
i
c
t
 
&
&
 
f
r
a
m
e
.
c
o
n
f
l
i
c
t
.
r
 
=
=
=
 
r
 
&
&
 
f
r
a
m
e
.
c
o
n
f
l
i
c
t
.
c
 
=
=
=
 
c
;


 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
 
b
g
 
=
 
i
s
L
i
g
h
t
 
?
 
"
#
f
1
f
5
f
9
"
 
:
 
"
#
c
b
d
5
e
1
"
;


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
i
s
C
o
n
f
l
i
c
t
)
 
b
g
 
=
 
"
#
f
c
a
5
a
5
"
;


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
i
s
T
r
y
i
n
g
 
&
&
 
!
q
u
e
e
n
)
 
b
g
 
=
 
"
#
f
d
e
6
8
a
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
 
k
e
y
=
{
`
$
{
r
}
-
$
{
c
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
b
o
l
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
c
o
l
o
r
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
 
w
i
d
t
h
:
 
s
i
z
e
,
 
h
e
i
g
h
t
:
 
s
i
z
e
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
 
f
o
n
t
S
i
z
e
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
1
4
,
 
s
i
z
e
 
-
 
1
2
)
,
 
c
o
l
o
r
:
 
q
u
e
e
n
 
?
 
"
#
b
e
1
8
5
d
"
 
:
 
"
#
7
8
7
1
6
c
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
q
u
e
e
n
 
?
 
"
♛
"
 
:
 
"
"
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
 
g
a
p
-
4
 
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
S
o
l
u
t
i
o
n
s
:
 
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
6
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
s
o
l
u
t
i
o
n
s
}
<
/
s
t
r
o
n
g
>
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
T
o
t
a
l
 
t
r
i
e
s
:
 
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
"
>
{
f
r
a
m
e
.
t
o
t
a
l
T
r
i
e
s
}
<
/
s
t
r
o
n
g
>
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
 
 
S
u
d
o
k
u
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
S
U
D
O
K
U
_
E
A
S
Y
:
 
n
u
m
b
e
r
[
]
[
]
 
=
 
[


 
 
[
5
,
 
3
,
 
0
,
 
0
,
 
7
,
 
0
,
 
0
,
 
0
,
 
0
]
,


 
 
[
6
,
 
0
,
 
0
,
 
1
,
 
9
,
 
5
,
 
0
,
 
0
,
 
0
]
,


 
 
[
0
,
 
9
,
 
8
,
 
0
,
 
0
,
 
0
,
 
0
,
 
6
,
 
0
]
,


 
 
[
8
,
 
0
,
 
0
,
 
0
,
 
6
,
 
0
,
 
0
,
 
0
,
 
3
]
,


 
 
[
4
,
 
0
,
 
0
,
 
8
,
 
0
,
 
3
,
 
0
,
 
0
,
 
1
]
,


 
 
[
7
,
 
0
,
 
0
,
 
0
,
 
2
,
 
0
,
 
0
,
 
0
,
 
6
]
,


 
 
[
0
,
 
6
,
 
0
,
 
0
,
 
0
,
 
0
,
 
2
,
 
8
,
 
0
]
,


 
 
[
0
,
 
0
,
 
0
,
 
4
,
 
1
,
 
9
,
 
0
,
 
0
,
 
5
]
,


 
 
[
0
,
 
0
,
 
0
,
 
0
,
 
8
,
 
0
,
 
0
,
 
7
,
 
9
]
,


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
 
S
u
d
o
k
u
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


 
 
g
r
i
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
[
]
;


 
 
c
e
l
l
?
:
 
{
 
r
:
 
n
u
m
b
e
r
;
 
c
:
 
n
u
m
b
e
r
 
}
;


 
 
t
r
y
i
n
g
V
a
l
?
:
 
n
u
m
b
e
r
;


 
 
c
o
n
f
l
i
c
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
;


 
 
t
r
i
e
s
:
 
n
u
m
b
e
r
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
S
U
D
O
K
U
 
=
 
[


 
 
"
s
o
l
v
e
(
g
r
i
d
)
:
"
,


 
 
"
 
 
f
i
n
d
 
e
m
p
t
y
 
c
e
l
l
 
(
r
,
 
c
)
"
,


 
 
"
 
 
i
f
 
n
o
n
e
:
 
r
e
t
u
r
n
 
S
O
L
V
E
D
"
,


 
 
"
 
 
f
o
r
 
v
 
i
n
 
1
.
.
9
:
"
,


 
 
"
 
 
 
 
i
f
 
v
a
l
i
d
(
r
,
 
c
,
 
v
)
:
"
,


 
 
"
 
 
 
 
 
 
g
r
i
d
[
r
]
[
c
]
 
←
 
v
"
,


 
 
"
 
 
 
 
 
 
i
f
 
s
o
l
v
e
(
g
r
i
d
)
:
 
r
e
t
u
r
n
 
S
O
L
V
E
D
"
,


 
 
"
 
 
 
 
 
 
g
r
i
d
[
r
]
[
c
]
 
←
 
0
 
 
/
/
 
b
a
c
k
t
r
a
c
k
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
u
i
l
d
S
u
d
o
k
u
(
i
n
i
t
i
a
l
:
 
n
u
m
b
e
r
[
]
[
]
)
:
 
S
u
d
o
k
u
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
u
d
o
k
u
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
 
g
r
i
d
 
=
 
i
n
i
t
i
a
l
.
m
a
p
(
(
r
o
w
)
 
=
>
 
[
.
.
.
r
o
w
]
)
;


 
 
l
e
t
 
t
r
i
e
s
 
=
 
0
;


 
 
c
o
n
s
t
 
c
a
p
 
=
 
1
2
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
 
v
a
l
i
d
(
r
:
 
n
u
m
b
e
r
,
 
c
:
 
n
u
m
b
e
r
,
 
v
:
 
n
u
m
b
e
r
)
 
{


 
 
 
 
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
 
9
;
 
i
+
+
)
 
{


 
 
 
 
 
 
i
f
 
(
g
r
i
d
[
r
]
[
i
]
 
=
=
=
 
v
 
|
|
 
g
r
i
d
[
i
]
[
c
]
 
=
=
=
 
v
)
 
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
;


 
 
 
 
}


 
 
 
 
c
o
n
s
t
 
b
r
 
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
r
 
/
 
3
)
 
*
 
3
,
 
b
c
 
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
c
 
/
 
3
)
 
*
 
3
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
 
3
;
 
i
+
+
)
 
f
o
r
 
(
l
e
t
 
j
 
=
 
0
;
 
j
 
<
 
3
;
 
j
+
+
)
 
i
f
 
(
g
r
i
d
[
b
r
 
+
 
i
]
[
b
c
 
+
 
j
]
 
=
=
=
 
v
)
 
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
;


 
 
 
 
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
 
f
i
n
d
E
m
p
t
y
(
)
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
 
|
 
n
u
l
l
 
{


 
 
 
 
f
o
r
 
(
l
e
t
 
r
 
=
 
0
;
 
r
 
<
 
9
;
 
r
+
+
)
 
f
o
r
 
(
l
e
t
 
c
 
=
 
0
;
 
c
 
<
 
9
;
 
c
+
+
)
 
i
f
 
(
g
r
i
d
[
r
]
[
c
]
 
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
 
[
r
,
 
c
]
;


 
 
 
 
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
(
f
:
 
O
m
i
t
<
S
u
d
o
k
u
F
r
a
m
e
,
 
"
g
r
i
d
"
 
|
 
"
t
r
i
e
s
"
>
)
 
{


 
 
 
 
i
f
 
(
f
r
a
m
e
s
.
l
e
n
g
t
h
 
>
=
 
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
 
.
.
.
f
,
 
t
r
i
e
s
,
 
g
r
i
d
:
 
g
r
i
d
.
m
a
p
(
(
r
o
w
)
 
=
>
 
[
.
.
.
r
o
w
]
)
 
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
o
l
v
e
(
)
:
 
b
o
o
l
e
a
n
 
{


 
 
 
 
i
f
 
(
f
r
a
m
e
s
.
l
e
n
g
t
h
 
>
=
 
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
 
t
r
u
e
;


 
 
 
 
c
o
n
s
t
 
e
m
p
t
y
 
=
 
f
i
n
d
E
m
p
t
y
(
)
;


 
 
 
 
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
 
t
r
i
e
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
 
"
E
n
t
e
r
 
s
o
l
v
e
(
)
.
"
 
}
)
;


 
 
 
 
i
f
 
(
!
e
m
p
t
y
)
 
{


 
 
 
 
 
 
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
 
t
r
i
e
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
 
"
N
o
 
e
m
p
t
y
 
c
e
l
l
s
 
-
 
S
u
d
o
k
u
 
s
o
l
v
e
d
!
"
 
}
)
;


 
 
 
 
 
 
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
;


 
 
 
 
}


 
 
 
 
c
o
n
s
t
 
[
r
,
 
c
]
 
=
 
e
m
p
t
y
;


 
 
 
 
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
 
r
,
 
c
,
 
t
r
i
e
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
F
o
u
n
d
 
e
m
p
t
y
 
c
e
l
l
 
(
$
{
r
}
,
 
$
{
c
}
)
.
`
,
 
c
e
l
l
:
 
{
 
r
,
 
c
 
}
 
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
 
v
 
=
 
1
;
 
v
 
<
=
 
9
;
 
v
+
+
)
 
{


 
 
 
 
 
 
i
f
 
(
f
r
a
m
e
s
.
l
e
n
g
t
h
 
>
=
 
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
 
t
r
u
e
;


 
 
 
 
 
 
t
r
i
e
s
+
+
;


 
 
 
 
 
 
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
 
r
,
 
c
,
 
v
,
 
t
r
i
e
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
T
r
y
 
v
a
l
u
e
 
$
{
v
}
 
a
t
 
(
$
{
r
}
,
 
$
{
c
}
)
.
`
,
 
c
e
l
l
:
 
{
 
r
,
 
c
 
}
,
 
t
r
y
i
n
g
V
a
l
:
 
v
 
}
)
;


 
 
 
 
 
 
i
f
 
(
!
v
a
l
i
d
(
r
,
 
c
,
 
v
)
)
 
{


 
 
 
 
 
 
 
 
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
 
r
,
 
c
,
 
v
,
 
t
r
i
e
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
$
{
v
}
 
c
o
n
f
l
i
c
t
s
 
w
i
t
h
 
r
o
w
/
c
o
l
/
b
o
x
.
 
S
k
i
p
.
`
,
 
c
e
l
l
:
 
{
 
r
,
 
c
 
}
,
 
t
r
y
i
n
g
V
a
l
:
 
v
,
 
c
o
n
f
l
i
c
t
:
 
t
r
u
e
 
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


 
 
 
 
 
 
g
r
i
d
[
r
]
[
c
]
 
=
 
v
;


 
 
 
 
 
 
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
 
r
,
 
c
,
 
v
,
 
t
r
i
e
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
l
a
c
e
 
$
{
v
}
.
 
R
e
c
u
r
s
e
.
`
,
 
c
e
l
l
:
 
{
 
r
,
 
c
 
}
,
 
t
r
y
i
n
g
V
a
l
:
 
v
 
}
)
;


 
 
 
 
 
 
i
f
 
(
s
o
l
v
e
(
)
)
 
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
;


 
 
 
 
 
 
g
r
i
d
[
r
]
[
c
]
 
=
 
0
;


 
 
 
 
 
 
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
 
r
,
 
c
,
 
v
,
 
t
r
i
e
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
e
c
u
r
s
e
 
f
a
i
l
e
d
.
 
B
a
c
k
t
r
a
c
k
 
(
c
l
e
a
r
 
(
$
{
r
}
,
$
{
c
}
)
)
.
`
,
 
c
e
l
l
:
 
{
 
r
,
 
c
 
}
,
 
t
r
y
i
n
g
V
a
l
:
 
v
,
 
c
o
n
f
l
i
c
t
:
 
t
r
u
e
 
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
a
l
s
e
;


 
 
}




 
 
s
o
l
v
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
 
S
u
d
o
k
u
B
o
a
r
d
(
{
 
f
r
a
m
e
,
 
i
n
i
t
i
a
l
 
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
u
d
o
k
u
F
r
a
m
e
;
 
i
n
i
t
i
a
l
:
 
n
u
m
b
e
r
[
]
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
b
o
r
d
e
r
-
2
 
r
o
u
n
d
e
d
 
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
"


 
 
 
 
 
 
 
 
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
g
r
i
d
"
,
 
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
9
,
 
3
2
p
x
)
"
,
 
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
R
o
w
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
9
,
 
3
2
p
x
)
"
,
 
b
o
r
d
e
r
C
o
l
o
r
:
 
"
#
0
f
1
7
2
a
"
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
g
r
i
d
.
m
a
p
(
(
r
o
w
,
 
r
)
 
=
>
 
r
o
w
.
m
a
p
(
(
v
,
 
c
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
G
i
v
e
n
 
=
 
i
n
i
t
i
a
l
[
r
]
[
c
]
 
!
=
=
 
0
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
A
c
t
i
v
e
 
=
 
f
r
a
m
e
.
c
e
l
l
?
.
r
 
=
=
=
 
r
 
&
&
 
f
r
a
m
e
.
c
e
l
l
?
.
c
 
=
=
=
 
c
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
n
f
l
i
c
t
 
=
 
i
s
A
c
t
i
v
e
 
&
&
 
f
r
a
m
e
.
c
o
n
f
l
i
c
t
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
h
o
w
n
V
a
l
 
=
 
i
s
A
c
t
i
v
e
 
&
&
 
f
r
a
m
e
.
t
r
y
i
n
g
V
a
l
 
&
&
 
!
i
s
G
i
v
e
n
 
&
&
 
v
 
=
=
=
 
0
 
?
 
f
r
a
m
e
.
t
r
y
i
n
g
V
a
l
 
:
 
v
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
R
i
g
h
t
 
=
 
(
c
 
+
 
1
)
 
%
 
3
 
=
=
=
 
0
 
&
&
 
c
 
<
 
8
 
?
 
"
2
p
x
 
s
o
l
i
d
 
#
0
f
1
7
2
a
"
 
:
 
"
1
p
x
 
s
o
l
i
d
 
#
c
b
d
5
e
1
"
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
B
o
t
t
o
m
 
=
 
(
r
 
+
 
1
)
 
%
 
3
 
=
=
=
 
0
 
&
&
 
r
 
<
 
8
 
?
 
"
2
p
x
 
s
o
l
i
d
 
#
0
f
1
7
2
a
"
 
:
 
"
1
p
x
 
s
o
l
i
d
 
#
c
b
d
5
e
1
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
 
k
e
y
=
{
`
$
{
r
}
-
$
{
c
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
b
o
l
d
 
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
 
3
2
,
 
h
e
i
g
h
t
:
 
3
2
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
i
s
G
i
v
e
n
 
?
 
"
#
0
f
1
7
2
a
"
 
:
 
i
s
C
o
n
f
l
i
c
t
 
?
 
"
#
9
9
1
b
1
b
"
 
:
 
"
#
1
d
4
e
d
8
"
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
 
i
s
C
o
n
f
l
i
c
t
 
?
 
"
#
f
e
c
a
c
a
"
 
:
 
i
s
A
c
t
i
v
e
 
?
 
"
#
f
d
e
6
8
a
"
 
:
 
i
s
G
i
v
e
n
 
?
 
"
#
f
1
f
5
f
9
"
 
:
 
"
#
f
f
f
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
i
g
h
t
,
 
b
o
r
d
e
r
B
o
t
t
o
m
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
n
V
a
l
 
>
 
0
 
?
 
s
h
o
w
n
V
a
l
 
:
 
"
"
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


 
 
 
 
 
 
 
 
T
r
i
e
s
 
s
o
 
f
a
r
:
 
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
"
>
{
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
s
}
<
/
s
t
r
o
n
g
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
q
u
e
e
n
s
"
 
|
 
"
s
u
d
o
k
u
"
>
(
"
q
u
e
e
n
s
"
)
;


 
 
c
o
n
s
t
 
[
n
S
t
r
,
 
s
e
t
N
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
5
"
)
;


 
 
c
o
n
s
t
 
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
4
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
6
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
N
u
m
b
e
r
(
n
S
t
r
)
 
|
|
 
5
)
)
)
;




 
 
c
o
n
s
t
 
q
u
e
e
n
s
F
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
Q
u
e
e
n
s
(
n
)
,
 
[
n
]
)
;


 
 
c
o
n
s
t
 
s
u
d
o
k
u
F
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
S
u
d
o
k
u
(
S
U
D
O
K
U
_
E
A
S
Y
)
,
 
[
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
Q
 
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
q
u
e
e
n
s
F
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
s
S
 
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
s
u
d
o
k
u
F
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
 
m
o
d
e
T
o
g
g
l
e
 
=
 
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
 
g
a
p
-
1
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
"
>


 
 
 
 
 
 
{
(
[
"
q
u
e
e
n
s
"
,
 
"
s
u
d
o
k
u
"
]
 
a
s
 
c
o
n
s
t
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
"
>
{
m
 
=
=
=
 
"
q
u
e
e
n
s
"
 
?
 
"
N
-
Q
u
e
e
n
s
"
 
:
 
"
S
u
d
o
k
u
"
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
q
u
e
e
n
s
"
)
 
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
 
=
 
f
r
a
m
e
s
Q
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
{
`
$
{
n
}
-
Q
u
e
e
n
s
 
-
 
B
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
f
r
a
m
e
s
Q
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


 
 
 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
T
o
g
g
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
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
B
o
a
r
d
 
s
i
z
e
 
n
 
(
4
–
6
)
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
n
S
t
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
N
-
Q
u
e
e
n
s
:
 
p
l
a
c
e
 
n
 
n
o
n
-
a
t
t
a
c
k
i
n
g
 
q
u
e
e
n
s
 
o
n
 
a
n
 
n
×
n
 
b
o
a
r
d
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
4
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
5
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
6
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
"
 
}
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
s
e
t
N
S
t
r
}


 
 
 
 
 
 
 
 
 
 
 
 
/
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
P
S
E
U
D
O
_
Q
U
E
E
N
S
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
[
"
t
r
i
e
s
"
,
 
"
s
o
l
u
t
i
o
n
s
"
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
.
5
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
w
-
2
.
5
 
h
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
s
m
 
b
g
-
a
m
b
e
r
-
2
0
0
"
 
/
>
t
r
y
i
n
g
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
.
5
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
w
-
2
.
5
 
h
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
s
m
 
b
g
-
r
e
d
-
3
0
0
"
 
/
>
c
o
n
f
l
i
c
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
 
c
l
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
p
i
n
k
-
7
0
0
"
>
♛
 
q
u
e
e
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
a
u
t
o
 
1
f
r
"
 
}
}
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
Q
u
e
e
n
s
B
o
a
r
d
 
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
 
n
=
{
n
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
<
R
e
c
u
r
s
i
o
n
T
r
e
e
 
n
o
d
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
s
 
?
?
 
[
]
}
 
a
c
t
i
v
e
I
d
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
c
t
i
v
e
I
d
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
2
0
}
 
/
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
}


 
 
 
 
 
 
 
 
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
 
f
r
a
m
e
s
S
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
S
u
d
o
k
u
 
-
 
B
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
"


 
 
 
 
 
 
p
l
a
y
e
r
=
{
f
r
a
m
e
s
S
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


 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
T
o
g
g
l
e
}


 
 
 
 
 
 
 
 
 
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
A
 
c
l
a
s
s
i
c
 
9
×
9
 
S
u
d
o
k
u
 
s
o
l
v
e
d
 
c
e
l
l
-
b
y
-
c
e
l
l
.
 
E
m
p
t
y
 
c
e
l
l
s
 
t
r
i
e
d
 
1
.
.
9
 
w
i
t
h
 
r
o
w
/
c
o
l
/
b
o
x
 
v
a
l
i
d
a
t
i
o
n
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
_
S
U
D
O
K
U
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
[
"
t
r
i
e
s
"
,
 
"
v
"
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
u
d
o
k
u
B
o
a
r
d
 
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
 
i
n
i
t
i
a
l
=
{
S
U
D
O
K
U
_
E
A
S
Y
}
 
/
>
}


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
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
}


 
 
 
 
 
 
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
 
c
a
r
d
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
W
h
a
t
 
i
s
 
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
?
"
,
 
b
o
d
y
:
 
"
A
 
b
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
 
s
e
a
r
c
h
 
t
h
a
t
 
g
r
o
w
s
 
a
 
p
a
r
t
i
a
l
 
s
o
l
u
t
i
o
n
 
o
n
e
 
c
h
o
i
c
e
 
a
t
 
a
 
t
i
m
e
.
 
W
h
e
n
 
a
 
c
h
o
i
c
e
 
l
e
a
d
s
 
t
o
 
f
a
i
l
u
r
e
,
 
i
t
 
'
u
n
m
a
k
e
s
'
 
t
h
e
 
c
h
o
i
c
e
 
a
n
d
 
t
r
i
e
s
 
a
n
o
t
h
e
r
 
-
 
a
 
d
e
p
t
h
-
f
i
r
s
t
 
e
x
p
l
o
r
a
t
i
o
n
 
o
f
 
t
h
e
 
s
t
a
t
e
-
s
p
a
c
e
 
t
r
e
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
T
e
m
p
l
a
t
e
"
,
 
b
o
d
y
:
 
"
c
h
o
o
s
e
 
→
 
e
x
p
l
o
r
e
 
→
 
u
n
c
h
o
o
s
e
.
 
Y
o
u
 
s
e
t
 
a
 
p
i
e
c
e
 
o
f
 
s
t
a
t
e
,
 
r
e
c
u
r
s
e
,
 
t
h
e
n
 
u
n
d
o
 
t
h
a
t
 
s
t
a
t
e
 
w
h
e
n
 
y
o
u
 
r
e
t
u
r
n
.
 
A
n
y
 
m
u
t
a
t
i
o
n
 
y
o
u
 
m
a
d
e
 
m
u
s
t
 
b
e
 
p
e
r
f
e
c
t
l
y
 
r
e
v
e
r
s
e
d
 
o
n
 
t
h
e
 
b
a
c
k
t
r
a
c
k
 
s
t
e
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
P
r
u
n
i
n
g
"
,
 
b
o
d
y
:
 
"
T
h
e
 
k
e
y
 
t
o
 
e
f
f
i
c
i
e
n
c
y
 
i
s
 
c
u
t
t
i
n
g
 
b
r
a
n
c
h
e
s
 
e
a
r
l
y
.
 
I
f
 
y
o
u
 
c
a
n
 
t
e
l
l
 
a
 
p
a
r
t
i
a
l
 
s
o
l
u
t
i
o
n
 
c
a
n
'
t
 
s
u
c
c
e
e
d
 
(
e
.
g
.
,
 
t
w
o
 
q
u
e
e
n
s
 
a
t
t
a
c
k
 
e
a
c
h
 
o
t
h
e
r
)
,
 
s
k
i
p
 
t
h
e
 
e
n
t
i
r
e
 
s
u
b
t
r
e
e
 
r
o
o
t
e
d
 
a
t
 
t
h
a
t
 
c
h
o
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
T
y
p
i
c
a
l
 
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
N
-
Q
u
e
e
n
s
,
 
S
u
d
o
k
u
,
 
w
o
r
d
 
s
e
a
r
c
h
 
i
n
 
a
 
g
r
i
d
,
 
g
e
n
e
r
a
t
i
n
g
 
a
l
l
 
p
e
r
m
u
t
a
t
i
o
n
s
/
c
o
m
b
i
n
a
t
i
o
n
s
,
 
g
r
a
p
h
 
c
o
l
o
r
i
n
g
,
 
H
a
m
i
l
t
o
n
i
a
n
 
p
a
t
h
,
 
s
u
b
s
e
t
-
s
u
m
 
w
i
t
h
 
e
x
p
l
i
c
i
t
 
c
h
o
i
c
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
W
a
l
k
 
a
 
t
r
e
e
 
o
f
 
c
h
o
i
c
e
s
.
 
P
o
p
 
o
n
 
d
e
a
d
 
e
n
d
.
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


 
 
 
 
 
 
 
 
 
 
W
a
l
k
i
n
g
 
a
 
m
a
z
e
 
w
i
t
h
 
a
 
p
i
e
c
e
 
o
f
 
c
h
a
l
k
:
 
a
t
 
e
v
e
r
y
 
j
u
n
c
t
i
o
n
 
y
o
u
 
m
a
r
k
 
t
h
e
 
p
a
t
h
 
y
o
u
 
t
o
o
k
,
 
w
a
l
k


 
 
 
 
 
 
 
 
 
 
f
o
r
w
a
r
d
,
 
a
n
d
 
i
f
 
y
o
u
 
h
i
t
 
a
 
d
e
a
d
 
e
n
d
 
y
o
u
 
e
r
a
s
e
 
t
h
e
 
m
a
r
k
 
a
n
d
 
t
r
y
 
t
h
e
 
n
e
x
t
 
b
r
a
n
c
h
.
 
B
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
i
s
 
&
q
u
o
t
;
c
h
o
o
s
e
,
 
r
e
c
u
r
s
e
,
 
u
n
c
h
o
o
s
e
&
q
u
o
t
;
 
p
a
t
t
e
r
n
,
 
e
x
p
r
e
s
s
e
d
 
a
s
 
r
e
c
u
r
s
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
c
a
r
d
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
H
o
w
 
m
a
n
y
 
s
o
l
u
t
i
o
n
s
 
d
o
e
s
 
4
-
Q
u
e
e
n
s
 
h
a
v
e
?
"
,
 
a
:
 
"
2
"
,
 
h
i
n
t
:
 
"
T
h
e
 
t
w
o
 
m
i
r
r
o
r
-
i
m
a
g
e
 
p
l
a
c
e
m
e
n
t
s
.
"
 
}
,


 
 
 
 
{
 
q
:
 
"
H
o
w
 
m
a
n
y
 
s
o
l
u
t
i
o
n
s
 
d
o
e
s
 
8
-
Q
u
e
e
n
s
 
h
a
v
e
?
"
,
 
a
:
 
"
9
2
"
,
 
h
i
n
t
:
 
"
C
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
.
"
 
}
,


 
 
 
 
{
 
q
:
 
"
N
a
i
v
e
 
g
e
n
e
r
a
t
i
n
g
 
a
l
l
 
p
e
r
m
u
t
a
t
i
o
n
s
 
o
f
 
n
=
4
 
-
 
h
o
w
 
m
a
n
y
 
l
e
a
v
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
?
"
,
 
a
:
 
"
2
4
"
,
 
h
i
n
t
:
 
"
n
!
 
=
 
4
·
3
·
2
·
1
.
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
 
p
l
a
c
i
n
g
 
q
u
e
e
n
s
 
a
t
 
(
0
,
1
)
,
 
(
1
,
3
)
,
 
c
a
n
 
w
e
 
p
l
a
c
e
 
a
 
q
u
e
e
n
 
i
n
 
r
o
w
 
2
 
c
o
l
u
m
n
 
0
?
"
,
 
a
:
 
"
y
e
s
"
,
 
h
i
n
t
:
 
"
C
h
e
c
k
 
c
o
l
 
0
 
-
 
n
o
 
q
u
e
e
n
;
 
c
h
e
c
k
 
d
i
a
g
o
n
a
l
s
.
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
a
c
e
 
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
.
 
R
e
v
e
a
l
 
w
h
e
n
 
r
e
a
d
y
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
 
!
=
=
 
n
u
l
l
 
&
&
 
g
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
 
=
=
=
 
p
.
a
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
f
l
e
x
-
1
 
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
2
4
 
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
1
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
5
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
5
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
✓
 
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
H
i
n
t
:
 
{
p
.
h
i
n
t
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
}


 
 
 
 
 
 
 
 
 
 
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
P
r
u
n
i
n
g
 
=
 
m
o
s
t
 
o
f
 
t
h
e
 
s
p
e
e
d
u
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


 
 
 
 
 
 
 
 
 
 
A
 
n
a
i
v
e
 
p
e
r
m
u
t
a
t
i
o
n
-
b
a
s
e
d
 
N
-
Q
u
e
e
n
s
 
t
r
i
e
s
 
n
!
 
b
o
a
r
d
s
.
 
W
i
t
h
 
&
q
u
o
t
;
c
o
l
u
m
n
 
a
l
r
e
a
d
y
 
u
s
e
d
&
q
u
o
t
;
 
a
n
d
 
&
q
u
o
t
;
d
i
a
g
o
n
a
l
 
c
o
n
f
l
i
c
t
&
q
u
o
t
;
 
p
r
u
n
i
n
g
,
 
r
e
a
l
 
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
 
e
x
p
l
o
r
e
s
 
a
 
t
i
n
y
 
f
r
a
c
t
i
o
n
 
-
 
8
-
Q
u
e
e
n
s
 
e
x
p
l
o
r
e
s
 
a
b
o
u
t
 
1
5
,
7
0
0
 
n
o
d
e
s
 
i
n
s
t
e
a
d
 
o
f
 
8
!
 
≈
 
4
0
,
0
0
0
 
p
e
r
m
u
t
a
t
i
o
n
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
D
i
f
f
e
r
e
n
c
e
 
f
r
o
m
 
p
l
a
i
n
 
D
F
S
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


 
 
 
 
 
 
 
 
 
 
D
F
S
 
e
x
p
l
o
r
e
s
 
a
 
f
i
x
e
d
 
g
r
a
p
h
.
 
B
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
 
b
u
i
l
d
s
 
t
h
e
 
g
r
a
p
h
 
<
e
m
>
o
n
 
t
h
e
 
f
l
y
<
/
e
m
>
 
-
 
n
o
d
e
s
 
a
r
e
 
p
a
r
t
i
a
l
 
s
o
l
u
t
i
o
n
s
,
 
e
d
g
e
s
 
a
r
e
 
&
q
u
o
t
;
a
d
d
 
o
n
e
 
e
l
e
m
e
n
t
&
q
u
o
t
;
.
 
T
h
e
 
s
t
a
t
e
-
s
p
a
c
e
 
i
s
 
i
m
p
l
i
c
i
t
 
a
n
d
 
o
f
t
e
n
 
h
u
g
e
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
 
p
a
t
t
e
r
n
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


 
 
 
 
 
 
 
 
 
 
<
l
i
>
S
t
a
t
e
-
s
p
a
c
e
 
t
r
e
e
:
 
d
r
a
w
 
i
t
 
t
o
 
c
o
u
n
t
 
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
B
o
u
n
d
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
:
 
p
r
u
n
e
 
w
h
e
n
e
v
e
r
 
p
a
r
t
i
a
l
 
c
o
s
t
 
≥
 
b
e
s
t
 
k
n
o
w
n
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
B
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
 
=
 
D
F
S
 
o
n
 
t
h
e
 
s
t
a
t
e
-
s
p
a
c
e
;
 
B
r
a
n
c
h
-
a
n
d
-
b
o
u
n
d
 
=
 
b
e
s
t
-
f
i
r
s
t
 
v
a
r
i
a
n
t
 
w
i
t
h
 
b
o
u
n
d
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
,
 
w
h
e
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
e
r
s
 
a
s
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
B
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
 
e
x
p
l
o
r
e
s
 
a
 
s
e
a
r
c
h
 
t
r
e
e
.
 
W
i
t
h
o
u
t
 
p
r
u
n
i
n
g
 
t
h
e
 
t
r
e
e
 
s
i
z
e
 
i
s
 
t
h
e


 
 
 
 
 
 
 
 
 
 
r
a
w
 
c
o
m
b
i
n
a
t
o
r
i
a
l
 
b
o
u
n
d
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
O
(
N
!
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
 
f
o
r
 
N
-
Q
u
e
e
n
s
,
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
O
(
2
^
n
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
 
f
o
r
 
s
u
b
s
e
t
s
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
O
(
n
!
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
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
f
o
r
 
p
e
r
m
u
t
a
t
i
o
n
s
.


 
 
 
 
 
 
 
 
<
/
p
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
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
P
r
u
n
i
n
g
 
(
c
o
l
u
m
n
 
c
o
n
f
l
i
c
t
s
,
 
d
i
a
g
o
n
a
l
 
c
o
n
f
l
i
c
t
s
,
 
&
q
u
o
t
;
a
l
r
e
a
d
y
 
u
s
e
d
&
q
u
o
t
;
 
s
e
t
s
)
 
c
u
t
s


 
 
 
 
 
 
 
 
 
 
h
u
g
e
 
p
o
r
t
i
o
n
s
 
o
f
 
t
h
e
 
t
r
e
e
.
 
I
n
 
p
r
a
c
t
i
c
e
 
N
-
Q
u
e
e
n
s
 
r
u
n
s
 
i
n
 
t
i
m
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
 
s
m
a
l
l
 
c
o
n
s
t
a
n
t
 
r
a
i
s
e
d
 
t
o
 
N
,
 
n
o
t
 
N
!
.
 
T
h
e
 
a
s
y
m
p
t
o
t
i
c
 
w
o
r
s
t
 
c
a
s
e
 
s
t
a
y
s


 
 
 
 
 
 
 
 
 
 
t
h
e
 
s
a
m
e
;
 
t
h
e
 
p
r
a
c
t
i
c
a
l
 
c
a
s
e
 
i
s
 
d
r
a
m
a
t
i
c
a
l
l
y
 
b
e
t
t
e
r
.


 
 
 
 
 
 
 
 
<
/
p
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


 
 
 
 
 
 
 
 
 
 
S
p
a
c
e
 
i
s
 
t
h
e
 
d
e
p
t
h
 
o
f
 
r
e
c
u
r
s
i
o
n
 
p
l
u
s
 
t
h
e
 
p
a
r
t
i
a
l
 
s
o
l
u
t
i
o
n
:
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
O
(
N
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
 
f
o
r
 
N
-
Q
u
e
e
n
s
,
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
O
(
n
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
 
f
o
r
 
s
u
b
s
e
t
s
 
a
n
d
 
p
e
r
m
u
t
a
t
i
o
n
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
6
_
B
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
 
}
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
 
i
s
 
t
h
e
 
d
e
f
i
n
i
n
g
 
i
d
e
a
 
o
f
 
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
e
r
a
t
i
v
e
l
y
 
i
m
p
r
o
v
e
 
a
 
s
o
l
u
t
i
o
n
"
,


 
 
 
 
 
 
 
 
"
B
u
i
l
d
 
a
 
p
a
r
t
i
a
l
 
s
o
l
u
t
i
o
n
,
 
a
n
d
 
i
f
 
i
t
 
f
a
i
l
s
,
 
u
n
d
o
 
t
h
e
 
l
a
s
t
 
s
t
e
p
 
a
n
d
 
t
r
y
 
a
n
o
t
h
e
r
 
c
h
o
i
c
e
"
,


 
 
 
 
 
 
 
 
"
C
o
m
p
u
t
e
 
a
l
l
 
s
o
l
u
t
i
o
n
s
 
i
n
 
p
a
r
a
l
l
e
l
"
,


 
 
 
 
 
 
 
 
"
C
a
c
h
e
 
r
e
s
u
l
t
s
 
t
o
 
a
v
o
i
d
 
r
e
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
C
h
o
o
s
e
 
→
 
e
x
p
l
o
r
e
 
→
 
u
n
c
h
o
o
s
e
.
 
T
h
a
t
 
D
F
S
-
o
n
-
c
h
o
i
c
e
s
 
p
a
t
t
e
r
n
 
i
s
 
t
h
e
 
e
s
s
e
n
c
e
 
o
f
 
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
 
N
-
Q
u
e
e
n
s
,
 
w
h
i
c
h
 
c
h
e
c
k
 
i
s
 
N
O
T
 
n
e
e
d
e
d
 
w
h
e
n
 
p
l
a
c
i
n
g
 
q
u
e
e
n
s
 
r
o
w
-
b
y
-
r
o
w
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
a
m
e
 
c
o
l
u
m
n
"
,
 
"
S
a
m
e
 
d
i
a
g
o
n
a
l
 
(
b
o
t
h
 
d
i
r
e
c
t
i
o
n
s
)
"
,
 
"
S
a
m
e
 
r
o
w
"
,
 
"
K
n
i
g
h
t
'
s
-
m
o
v
e
 
a
t
t
a
c
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
 
3
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
Q
u
e
e
n
s
 
d
o
n
'
t
 
m
o
v
e
 
i
n
 
k
n
i
g
h
t
'
s
 
m
o
v
e
s
.
 
A
n
d
 
s
i
n
c
e
 
w
e
 
p
l
a
c
e
 
o
n
e
 
q
u
e
e
n
 
p
e
r
 
r
o
w
,
 
t
w
o
 
q
u
e
e
n
s
 
c
a
n
 
n
e
v
e
r
 
b
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
 
r
o
w
 
-
 
s
o
 
t
h
a
t
 
c
h
e
c
k
 
i
s
 
a
l
s
o
 
i
m
p
l
i
c
i
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
W
h
y
 
i
s
 
p
r
u
n
i
n
g
 
e
s
s
e
n
t
i
a
l
 
f
o
r
 
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
 
g
u
a
r
a
n
t
e
e
s
 
t
h
e
 
b
e
s
t
 
s
o
l
u
t
i
o
n
"
,


 
 
 
 
 
 
 
 
"
I
t
 
r
e
d
u
c
e
s
 
t
h
e
 
s
e
a
r
c
h
 
s
p
a
c
e
,
 
o
f
t
e
n
 
b
y
 
o
r
d
e
r
s
 
o
f
 
m
a
g
n
i
t
u
d
e
"
,


 
 
 
 
 
 
 
 
"
I
t
 
m
a
k
e
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
 
p
o
l
y
n
o
m
i
a
l
-
t
i
m
e
"
,


 
 
 
 
 
 
 
 
"
I
t
 
c
o
n
v
e
r
t
s
 
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
o
 
D
P
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
P
r
u
n
i
n
g
 
c
u
t
s
 
o
f
f
 
e
n
t
i
r
e
 
s
u
b
t
r
e
e
s
 
t
h
a
t
 
c
a
n
n
o
t
 
l
e
a
d
 
t
o
 
a
 
v
a
l
i
d
 
s
o
l
u
t
i
o
n
 
-
 
t
u
r
n
i
n
g
 
e
x
p
o
n
e
n
t
i
a
l
 
w
o
r
s
t
 
c
a
s
e
s
 
i
n
t
o
 
t
r
a
c
t
a
b
l
e
 
r
u
n
s
 
f
o
r
 
p
r
a
c
t
i
c
a
l
 
i
n
s
t
a
n
c
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
I
n
 
S
u
d
o
k
u
,
 
w
h
e
n
 
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
 
f
r
o
m
 
c
e
l
l
 
(
r
,
 
c
)
,
 
w
h
a
t
 
m
u
s
t
 
y
o
u
 
d
o
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
L
e
a
v
e
 
t
h
e
 
v
a
l
u
e
 
i
n
 
p
l
a
c
e
"
,


 
 
 
 
 
 
 
 
"
S
e
t
 
g
r
i
d
[
r
]
[
c
]
 
b
a
c
k
 
t
o
 
0
 
a
n
d
 
t
r
y
 
t
h
e
 
n
e
x
t
 
c
a
n
d
i
d
a
t
e
"
,


 
 
 
 
 
 
 
 
"
R
e
s
t
a
r
t
 
f
r
o
m
 
t
h
e
 
t
o
p
-
l
e
f
t
 
c
e
l
l
"
,


 
 
 
 
 
 
 
 
"
W
r
i
t
e
 
a
 
r
a
n
d
o
m
 
v
a
l
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
T
h
e
 
'
u
n
m
a
k
e
'
 
s
t
e
p
 
r
e
s
t
o
r
e
s
 
s
t
a
t
e
,
 
s
o
 
s
i
b
l
i
n
g
 
c
h
o
i
c
e
s
 
s
t
a
r
t
 
f
r
o
m
 
a
n
 
i
d
e
n
t
i
c
a
l
 
p
o
s
i
t
i
o
n
 
t
o
 
t
h
e
 
p
r
e
-
c
h
o
i
c
e
 
b
o
a
r
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
B
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
"


 
 
 
 
 
 
l
e
v
e
l
=
{
6
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
3
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
C
o
r
e
 
t
e
c
h
n
i
q
u
e
 
f
o
r
 
N
-
Q
u
e
e
n
s
 
/
 
S
u
d
o
k
u
 
/
 
s
u
b
s
e
t
s
 
/
 
c
o
m
b
i
n
a
t
i
o
n
s
 
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
D
y
n
a
m
i
c
 
P
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
1
D
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


