
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
r
e
c
u
r
s
i
o
n
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
 
S
t
a
c
k
F
r
a
m
e
D
a
t
a
 
{
 
v
a
l
u
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
 
n
u
m
b
e
r
 
|
 
s
t
r
i
n
g
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
t
a
c
k
:
 
S
t
a
c
k
F
r
a
m
e
D
a
t
a
[
]
;


 
 
c
a
l
l
C
o
u
n
t
:
 
n
u
m
b
e
r
;


 
 
p
e
g
s
?
:
 
{
 
A
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
 
B
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
 
C
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
;


 
 
m
o
v
e
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
6
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
8
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
 
6
0
;




 
 
/
/
 
G
r
o
u
p
 
b
y
 
d
e
p
t
h
,
 
a
s
s
i
g
n
 
x
 
p
o
s
i
t
i
o
n
s


 
 
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
;


 
 
 
 
 
 
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
t
o
t
a
l
 
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
 
3
0
 
+
 
d
 
*
 
l
e
v
e
l
H
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
 
6
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
9
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
 
8
 
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
 
7
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
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
o
s
.
x
 
+
 
n
o
d
e
R
 
+
 
4
}
 
y
=
{
p
o
s
.
y
 
-
 
n
o
d
e
R
 
+
 
8
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
"
9
"
 
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
a
c
c
e
n
t
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
=
{
S
t
r
i
n
g
(
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
)
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
t
a
c
k
C
o
l
u
m
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
 
S
t
a
c
k
C
o
l
u
m
n
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
 
=
 
3
0
0
 
}
:
 
{


 
 
i
t
e
m
s
:
 
{
 
v
a
l
u
e
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
;


 
 
t
i
t
l
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


 
 
m
a
x
H
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
x
H
e
i
g
h
t
,
 
o
v
e
r
f
l
o
w
Y
:
 
"
a
u
t
o
"
 
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
1
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
d
i
v
>


 
 
 
 
 
 
{
[
.
.
.
i
t
e
m
s
]
.
r
e
v
e
r
s
e
(
)
.
m
a
p
(
(
i
t
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
{
`
p
x
-
2
 
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
 
b
o
r
d
e
r
 
$
{
i
 
=
=
=
 
0
 
?
 
"
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
3
0
0
"
 
:
 
"
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
}
`
}
>


 
 
 
 
 
 
 
 
 
 
{
i
t
.
v
a
l
u
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
e
m
p
t
y
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
a
c
t
o
r
i
a
l
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
_
F
A
C
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
 
f
a
c
t
(
n
)
:
"
,


 
 
"
 
 
i
f
 
n
 
<
=
 
1
:
"
,


 
 
"
 
 
 
 
r
e
t
u
r
n
 
1
"
,


 
 
"
 
 
r
 
←
 
f
a
c
t
(
n
 
-
 
1
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
 
n
 
*
 
r
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
F
a
c
t
o
r
i
a
l
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


 
 
c
o
n
s
t
 
s
t
a
c
k
:
 
S
t
a
c
k
F
r
a
m
e
D
a
t
a
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
a
l
l
C
o
u
n
t
 
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
 
r
e
c
u
r
s
e
(
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
 
i
d
 
=
 
`
f
$
{
v
a
l
}
-
$
{
c
a
l
l
C
o
u
n
t
}
`
;


 
 
 
 
c
a
l
l
C
o
u
n
t
+
+
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
f
a
c
t
(
$
{
v
a
l
}
)
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
:
 
s
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
 
v
a
l
u
e
:
 
`
f
a
c
t
(
$
{
v
a
l
}
)
`
,
 
l
a
b
e
l
:
 
"
c
a
l
l
"
 
}
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
 
n
:
 
v
a
l
,
 
d
e
p
t
h
:
 
s
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
 
c
a
l
l
s
:
 
c
a
l
l
C
o
u
n
t
 
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
 
f
a
c
t
(
$
{
v
a
l
}
)
 
-
 
p
u
s
h
 
o
n
t
o
 
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
d
e
p
t
h
 
$
{
s
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
}
)
.
`
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
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
c
a
l
l
C
o
u
n
t
,


 
 
 
 
}
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
 
1
,
 
v
a
r
s
:
 
{
 
n
:
 
v
a
l
,
 
d
e
p
t
h
:
 
s
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
 
c
a
l
l
s
:
 
c
a
l
l
C
o
u
n
t
 
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
h
e
c
k
 
b
a
s
e
 
c
a
s
e
:
 
i
s
 
$
{
v
a
l
}
 
<
=
 
1
?
`
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
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
c
a
l
l
C
o
u
n
t
,


 
 
 
 
}
)
;




 
 
 
 
i
f
 
(
v
a
l
 
<
=
 
1
)
 
{


 
 
 
 
 
 
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
 
1
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
 
n
:
 
v
a
l
,
 
d
e
p
t
h
:
 
s
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
 
c
a
l
l
s
:
 
c
a
l
l
C
o
u
n
t
,
 
r
e
t
u
r
n
s
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
a
s
e
 
c
a
s
e
 
h
i
t
:
 
r
e
t
u
r
n
 
1
.
`
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
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
c
a
l
l
C
o
u
n
t
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
s
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


 
 
 
 
 
 
r
e
t
u
r
n
 
1
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
 
v
a
r
s
:
 
{
 
n
:
 
v
a
l
,
 
d
e
p
t
h
:
 
s
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
 
c
a
l
l
s
:
 
c
a
l
l
C
o
u
n
t
 
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
:
 
c
o
m
p
u
t
e
 
f
a
c
t
(
$
{
v
a
l
 
-
 
1
}
)
.
`
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
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
c
a
l
l
C
o
u
n
t
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
 
=
 
r
e
c
u
r
s
e
(
v
a
l
 
-
 
1
,
 
i
d
)
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
a
c
t
i
v
e
"
;


 
 
 
 
c
o
n
s
t
 
r
e
s
u
l
t
 
=
 
v
a
l
 
*
 
r
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
 
r
e
s
u
l
t
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
 
n
:
 
v
a
l
,
 
r
,
 
r
e
s
u
l
t
,
 
d
e
p
t
h
:
 
s
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
 
c
a
l
l
s
:
 
c
a
l
l
C
o
u
n
t
 
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
b
i
n
e
:
 
r
e
t
u
r
n
 
$
{
v
a
l
}
 
×
 
$
{
r
}
 
=
 
$
{
r
e
s
u
l
t
}
.
 
P
o
p
 
f
r
a
m
e
.
`
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
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
c
a
l
l
C
o
u
n
t
,


 
 
 
 
}
)
;


 
 
 
 
s
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


 
 
 
 
r
e
t
u
r
n
 
r
e
s
u
l
t
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
n
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
i
b
o
n
a
c
c
i
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
_
F
I
B
 
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
b
(
n
)
:
"
,


 
 
"
 
 
i
f
 
n
 
<
 
2
:
"
,


 
 
"
 
 
 
 
r
e
t
u
r
n
 
n
"
,


 
 
"
 
 
a
 
←
 
f
i
b
(
n
 
-
 
1
)
"
,


 
 
"
 
 
b
 
←
 
f
i
b
(
n
 
-
 
2
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
 
a
 
+
 
b
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
F
i
b
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


 
 
c
o
n
s
t
 
s
t
a
c
k
:
 
S
t
a
c
k
F
r
a
m
e
D
a
t
a
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
 
c
a
l
l
C
o
u
n
t
 
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
 
r
e
c
u
r
s
e
(
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
 
i
d
 
=
 
`
f
i
b
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
a
l
l
C
o
u
n
t
+
+
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
f
i
b
(
$
{
v
a
l
}
)
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
 
v
a
l
u
e
:
 
`
f
i
b
(
$
{
v
a
l
}
)
`
,
 
l
a
b
e
l
:
 
"
c
a
l
l
"
 
}
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
 
n
:
 
v
a
l
,
 
d
e
p
t
h
,
 
c
a
l
l
s
:
 
c
a
l
l
C
o
u
n
t
 
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
 
f
i
b
(
$
{
v
a
l
}
)
.
`
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
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
c
a
l
l
C
o
u
n
t
,


 
 
 
 
}
)
;




 
 
 
 
i
f
 
(
v
a
l
 
<
 
2
)
 
{


 
 
 
 
 
 
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
 
v
a
l
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
 
n
:
 
v
a
l
,
 
d
e
p
t
h
,
 
r
e
t
u
r
n
s
:
 
v
a
l
,
 
c
a
l
l
s
:
 
c
a
l
l
C
o
u
n
t
 
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
s
e
:
 
f
i
b
(
$
{
v
a
l
}
)
 
r
e
t
u
r
n
s
 
$
{
v
a
l
}
.
`
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
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
c
a
l
l
C
o
u
n
t
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
s
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


 
 
 
 
 
 
r
e
t
u
r
n
 
v
a
l
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
 
v
a
r
s
:
 
{
 
n
:
 
v
a
l
,
 
d
e
p
t
h
,
 
c
a
l
l
s
:
 
c
a
l
l
C
o
u
n
t
 
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
:
 
f
i
b
(
$
{
v
a
l
 
-
 
1
}
)
.
`
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
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
c
a
l
l
C
o
u
n
t
,


 
 
 
 
}
)
;


 
 
 
 
c
o
n
s
t
 
a
 
=
 
r
e
c
u
r
s
e
(
v
a
l
 
-
 
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
 
n
:
 
v
a
l
,
 
a
,
 
d
e
p
t
h
,
 
c
a
l
l
s
:
 
c
a
l
l
C
o
u
n
t
 
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
L
e
f
t
 
r
e
t
u
r
n
e
d
 
$
{
a
}
.
 
N
o
w
 
r
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
:
 
f
i
b
(
$
{
v
a
l
 
-
 
2
}
)
.
`
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
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
c
a
l
l
C
o
u
n
t
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
 
=
 
r
e
c
u
r
s
e
(
v
a
l
 
-
 
2
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




 
 
 
 
c
o
n
s
t
 
r
 
=
 
a
 
+
 
b
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
 
r
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
 
n
:
 
v
a
l
,
 
a
,
 
b
,
 
r
,
 
d
e
p
t
h
,
 
c
a
l
l
s
:
 
c
a
l
l
C
o
u
n
t
 
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
b
i
n
e
:
 
f
i
b
(
$
{
v
a
l
}
)
 
=
 
$
{
a
}
 
+
 
$
{
b
}
 
=
 
$
{
r
}
.
`
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
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
c
a
l
l
C
o
u
n
t
,


 
 
 
 
}
)
;


 
 
 
 
s
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


 
 
 
 
r
e
t
u
r
n
 
r
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
n
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
o
w
e
r
 
o
f
 
H
a
n
o
i
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
_
H
A
N
O
I
 
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
 
h
a
n
o
i
(
n
,
 
s
r
c
,
 
a
u
x
,
 
d
s
t
)
:
"
,


 
 
"
 
 
i
f
 
n
 
=
=
 
1
:
"
,


 
 
"
 
 
 
 
m
o
v
e
 
d
i
s
k
 
1
 
f
r
o
m
 
s
r
c
 
t
o
 
d
s
t
"
,


 
 
"
 
 
 
 
r
e
t
u
r
n
"
,


 
 
"
 
 
h
a
n
o
i
(
n
-
1
,
 
s
r
c
,
 
d
s
t
,
 
a
u
x
)
"
,


 
 
"
 
 
m
o
v
e
 
d
i
s
k
 
n
 
f
r
o
m
 
s
r
c
 
t
o
 
d
s
t
"
,


 
 
"
 
 
h
a
n
o
i
(
n
-
1
,
 
a
u
x
,
 
s
r
c
,
 
d
s
t
)
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
H
a
n
o
i
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


 
 
c
o
n
s
t
 
s
t
a
c
k
:
 
S
t
a
c
k
F
r
a
m
e
D
a
t
a
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
 
c
a
l
l
C
o
u
n
t
 
=
 
0
;


 
 
c
o
n
s
t
 
p
e
g
s
:
 
{
 
A
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
 
B
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
 
C
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
 
=
 
{
 
A
:
 
[
]
,
 
B
:
 
[
]
,
 
C
:
 
[
]
 
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
 
n
;
 
i
 
>
=
 
1
;
 
i
-
-
)
 
p
e
g
s
.
A
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
 
m
o
v
e
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
 
r
e
c
u
r
s
e
(
k
:
 
n
u
m
b
e
r
,
 
s
r
c
:
 
"
A
"
 
|
 
"
B
"
 
|
 
"
C
"
,
 
a
u
x
:
 
"
A
"
 
|
 
"
B
"
 
|
 
"
C
"
,
 
d
s
t
:
 
"
A
"
 
|
 
"
B
"
 
|
 
"
C
"
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
h
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
a
l
l
C
o
u
n
t
+
+
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
h
(
$
{
k
}
,
$
{
s
r
c
}
→
$
{
d
s
t
}
)
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
 
v
a
l
u
e
:
 
`
h
(
$
{
k
}
,
$
{
s
r
c
}
,
$
{
d
s
t
}
)
`
,
 
l
a
b
e
l
:
 
"
c
a
l
l
"
 
}
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
 
n
:
 
k
,
 
s
r
c
,
 
d
s
t
,
 
d
e
p
t
h
,
 
c
a
l
l
s
:
 
c
a
l
l
C
o
u
n
t
 
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
 
h
a
n
o
i
(
$
{
k
}
,
 
$
{
s
r
c
}
→
$
{
d
s
t
}
)
.
`
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
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
c
a
l
l
C
o
u
n
t
,


 
 
 
 
 
 
p
e
g
s
:
 
{
 
A
:
 
[
.
.
.
p
e
g
s
.
A
]
,
 
B
:
 
[
.
.
.
p
e
g
s
.
B
]
,
 
C
:
 
[
.
.
.
p
e
g
s
.
C
]
 
}
,
 
m
o
v
e
s
:
 
[
.
.
.
m
o
v
e
s
]
,


 
 
 
 
}
)
;




 
 
 
 
i
f
 
(
k
 
=
=
=
 
1
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
d
i
s
k
 
=
 
p
e
g
s
[
s
r
c
]
.
p
o
p
(
)
!
;


 
 
 
 
 
 
p
e
g
s
[
d
s
t
]
.
p
u
s
h
(
d
i
s
k
)
;


 
 
 
 
 
 
m
o
v
e
s
.
p
u
s
h
(
`
$
{
s
r
c
}
 
→
 
$
{
d
s
t
}
`
)
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
 
n
:
 
k
,
 
s
r
c
,
 
d
s
t
,
 
m
o
v
e
s
:
 
m
o
v
e
s
.
l
e
n
g
t
h
,
 
c
a
l
l
s
:
 
c
a
l
l
C
o
u
n
t
 
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
o
v
e
 
d
i
s
k
 
1
 
f
r
o
m
 
$
{
s
r
c
}
 
t
o
 
$
{
d
s
t
}
.
`
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
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
c
a
l
l
C
o
u
n
t
,


 
 
 
 
 
 
 
 
p
e
g
s
:
 
{
 
A
:
 
[
.
.
.
p
e
g
s
.
A
]
,
 
B
:
 
[
.
.
.
p
e
g
s
.
B
]
,
 
C
:
 
[
.
.
.
p
e
g
s
.
C
]
 
}
,
 
m
o
v
e
s
:
 
[
.
.
.
m
o
v
e
s
]
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
s
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
 
4
,
 
v
a
r
s
:
 
{
 
n
:
 
k
,
 
s
r
c
,
 
a
u
x
,
 
d
s
t
,
 
c
a
l
l
s
:
 
c
a
l
l
C
o
u
n
t
 
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
e
p
 
1
:
 
m
o
v
e
 
t
o
p
 
$
{
k
 
-
 
1
}
 
d
i
s
k
s
 
$
{
s
r
c
}
→
$
{
a
u
x
}
 
(
u
s
e
 
$
{
d
s
t
}
 
a
s
 
s
p
a
r
e
)
.
`
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
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
c
a
l
l
C
o
u
n
t
,


 
 
 
 
 
 
p
e
g
s
:
 
{
 
A
:
 
[
.
.
.
p
e
g
s
.
A
]
,
 
B
:
 
[
.
.
.
p
e
g
s
.
B
]
,
 
C
:
 
[
.
.
.
p
e
g
s
.
C
]
 
}
,
 
m
o
v
e
s
:
 
[
.
.
.
m
o
v
e
s
]
,


 
 
 
 
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
k
 
-
 
1
,
 
s
r
c
,
 
d
s
t
,
 
a
u
x
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




 
 
 
 
c
o
n
s
t
 
d
i
s
k
 
=
 
p
e
g
s
[
s
r
c
]
.
p
o
p
(
)
!
;


 
 
 
 
p
e
g
s
[
d
s
t
]
.
p
u
s
h
(
d
i
s
k
)
;


 
 
 
 
m
o
v
e
s
.
p
u
s
h
(
`
$
{
s
r
c
}
 
→
 
$
{
d
s
t
}
`
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
 
n
:
 
k
,
 
s
r
c
,
 
d
s
t
,
 
m
o
v
e
s
:
 
m
o
v
e
s
.
l
e
n
g
t
h
,
 
c
a
l
l
s
:
 
c
a
l
l
C
o
u
n
t
 
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
e
p
 
2
:
 
m
o
v
e
 
d
i
s
k
 
$
{
k
}
 
(
b
o
t
t
o
m
)
 
f
r
o
m
 
$
{
s
r
c
}
 
t
o
 
$
{
d
s
t
}
.
`
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
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
c
a
l
l
C
o
u
n
t
,


 
 
 
 
 
 
p
e
g
s
:
 
{
 
A
:
 
[
.
.
.
p
e
g
s
.
A
]
,
 
B
:
 
[
.
.
.
p
e
g
s
.
B
]
,
 
C
:
 
[
.
.
.
p
e
g
s
.
C
]
 
}
,
 
m
o
v
e
s
:
 
[
.
.
.
m
o
v
e
s
]
,


 
 
 
 
}
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
 
n
:
 
k
,
 
s
r
c
:
 
a
u
x
,
 
d
s
t
,
 
c
a
l
l
s
:
 
c
a
l
l
C
o
u
n
t
 
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
e
p
 
3
:
 
m
o
v
e
 
t
h
e
 
$
{
k
 
-
 
1
}
 
d
i
s
k
s
 
$
{
a
u
x
}
→
$
{
d
s
t
}
.
`
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
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
c
a
l
l
C
o
u
n
t
,


 
 
 
 
 
 
p
e
g
s
:
 
{
 
A
:
 
[
.
.
.
p
e
g
s
.
A
]
,
 
B
:
 
[
.
.
.
p
e
g
s
.
B
]
,
 
C
:
 
[
.
.
.
p
e
g
s
.
C
]
 
}
,
 
m
o
v
e
s
:
 
[
.
.
.
m
o
v
e
s
]
,


 
 
 
 
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
k
 
-
 
1
,
 
a
u
x
,
 
s
r
c
,
 
d
s
t
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
 
n
:
 
k
,
 
d
o
n
e
:
 
1
,
 
c
a
l
l
s
:
 
c
a
l
l
C
o
u
n
t
 
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
h
a
n
o
i
(
$
{
k
}
,
 
$
{
s
r
c
}
→
$
{
d
s
t
}
)
 
f
i
n
i
s
h
e
d
.
 
P
o
p
.
`
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
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
c
a
l
l
C
o
u
n
t
,


 
 
 
 
 
 
p
e
g
s
:
 
{
 
A
:
 
[
.
.
.
p
e
g
s
.
A
]
,
 
B
:
 
[
.
.
.
p
e
g
s
.
B
]
,
 
C
:
 
[
.
.
.
p
e
g
s
.
C
]
 
}
,
 
m
o
v
e
s
:
 
[
.
.
.
m
o
v
e
s
]
,


 
 
 
 
}
)
;


 
 
 
 
s
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




 
 
r
e
c
u
r
s
e
(
n
,
 
"
A
"
,
 
"
B
"
,
 
"
C
"
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
 
 
H
a
n
o
i
 
p
e
g
 
v
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
 
H
a
n
o
i
P
e
g
s
(
{
 
p
e
g
s
,
 
n
M
a
x
 
}
:
 
{
 
p
e
g
s
:
 
{
 
A
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
 
B
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
 
C
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
;
 
n
M
a
x
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
 
p
e
g
N
a
m
e
s
 
=
 
[
"
A
"
,
 
"
B
"
,
 
"
C
"
]
 
a
s
 
c
o
n
s
t
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
s
 
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
f
4
4
4
4
"
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
 
g
a
p
-
6
 
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
 
p
y
-
3
"
>


 
 
 
 
 
 
{
p
e
g
N
a
m
e
s
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
p
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
r
e
l
a
t
i
v
e
 
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
 
p
-
1
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
 
n
M
a
x
 
*
 
2
2
 
+
 
1
2
,
 
h
e
i
g
h
t
:
 
(
n
M
a
x
 
+
 
1
)
 
*
 
1
6
 
+
 
1
4
 
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
0
 
l
e
f
t
-
1
/
2
 
-
t
r
a
n
s
l
a
t
e
-
x
-
1
/
2
 
w
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
s
m
 
b
g
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
 
(
n
M
a
x
 
+
 
1
)
 
*
 
1
6
 
+
 
1
0
 
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
0
 
l
e
f
t
-
0
 
r
i
g
h
t
-
0
 
h
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
s
m
 
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
0
"
 
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
r
e
l
a
t
i
v
e
 
z
-
1
0
 
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
 
p
b
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
e
g
s
[
p
]
.
m
a
p
(
(
d
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
d
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
 
t
e
x
t
-
w
h
i
t
e
 
f
o
n
t
-
b
o
l
d
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
d
 
*
 
1
8
 
+
 
1
0
,
 
h
e
i
g
h
t
:
 
1
4
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
l
o
r
s
[
(
d
 
-
 
1
)
 
%
 
c
o
l
o
r
s
.
l
e
n
g
t
h
]
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
7
r
e
m
"
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
 
e
a
s
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
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
p
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
f
a
c
t
o
r
i
a
l
"
 
|
 
"
f
i
b
o
n
a
c
c
i
"
 
|
 
"
h
a
n
o
i
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
f
a
c
t
o
r
i
a
l
"
)
;


 
 
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
 
M
a
t
h
.
m
i
n
(
m
o
d
e
 
=
=
=
 
"
f
i
b
o
n
a
c
c
i
"
 
?
 
7
 
:
 
m
o
d
e
 
=
=
=
 
"
h
a
n
o
i
"
 
?
 
4
 
:
 
7
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
i
n
p
u
t
)
 
|
|
 
0
)
)
)
 
|
|
 
1
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
f
a
c
t
o
r
i
a
l
"
)
 
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
a
c
t
o
r
i
a
l
(
p
a
r
s
e
d
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
f
i
b
o
n
a
c
c
i
"
)
 
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
i
b
(
p
a
r
s
e
d
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
H
a
n
o
i
(
p
a
r
s
e
d
)
;


 
 
}
,
 
[
m
o
d
e
,
 
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
f
a
c
t
o
r
i
a
l
"
 
?
 
P
S
E
U
D
O
_
F
A
C
T
 
:
 
m
o
d
e
 
=
=
=
 
"
f
i
b
o
n
a
c
c
i
"
 
?
 
P
S
E
U
D
O
_
F
I
B
 
:
 
P
S
E
U
D
O
_
H
A
N
O
I
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
R
e
c
u
r
s
i
o
n
 
-
 
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
f
a
c
t
o
r
i
a
l
"
 
?
 
"
F
a
c
t
o
r
i
a
l
"
 
:
 
m
o
d
e
 
=
=
=
 
"
f
i
b
o
n
a
c
c
i
"
 
?
 
"
F
i
b
o
n
a
c
c
i
"
 
:
 
"
T
o
w
e
r
 
o
f
 
H
a
n
o
i
"
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
f
a
c
t
o
r
i
a
l
"
,
 
"
f
i
b
o
n
a
c
c
i
"
,
 
"
h
a
n
o
i
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
 
=
=
=
 
"
f
a
c
t
o
r
i
a
l
"
 
?
 
"
F
a
c
t
o
r
i
a
l
"
 
:
 
m
 
=
=
=
 
"
f
i
b
o
n
a
c
c
i
"
 
?
 
"
F
i
b
o
n
a
c
c
i
"
 
:
 
"
T
o
w
e
r
 
o
f
 
H
a
n
o
i
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
{
m
o
d
e
 
=
=
=
 
"
h
a
n
o
i
"
 
?
 
"
D
i
s
k
s
 
n
 
(
1
–
4
)
"
 
:
 
"
I
n
p
u
t
 
n
"
}


 
 
 
 
 
 
 
 
 
 
 
 
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
 
5
"


 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
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
f
i
b
o
n
a
c
c
i
"
 
?
 
"
F
i
b
 
g
r
o
w
s
 
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
l
y
 
-
 
c
a
p
p
e
d
 
a
t
 
7
.
"
 
:
 
m
o
d
e
 
=
=
=
 
"
h
a
n
o
i
"
 
?
 
"
H
a
n
o
i
 
d
o
u
b
l
e
s
 
p
e
r
 
d
i
s
k
 
-
 
c
a
p
p
e
d
 
a
t
 
4
.
"
 
:
 
"
F
a
c
t
o
r
i
a
l
 
-
 
t
r
y
 
5
 
o
r
 
6
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
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
h
a
n
o
i
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
[
{
 
l
a
b
e
l
:
 
"
n
=
2
"
,
 
v
a
l
u
e
:
 
"
2
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
n
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
n
=
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
]


 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
m
o
d
e
 
=
=
=
 
"
f
i
b
o
n
a
c
c
i
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
[
{
 
l
a
b
e
l
:
 
"
n
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
n
=
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
n
=
7
"
,
 
v
a
l
u
e
:
 
"
7
"
 
}
]


 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
[
{
 
l
a
b
e
l
:
 
"
n
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
n
=
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
n
=
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
(
v
)
 
=
>
 
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
c
a
l
l
s
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
"
,
 
"
r
"
,
 
"
r
e
s
u
l
t
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
 
c
l
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
 
"
#
3
b
8
2
f
6
"
 
}
}
 
/
>
a
c
t
i
v
e
 
c
a
l
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
 
c
l
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
 
"
#
1
0
b
9
8
1
"
 
}
}
 
/
>
r
e
t
u
r
n
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
T
o
t
a
l
 
c
a
l
l
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
?
.
c
a
l
l
C
o
u
n
t
 
?
?
 
0
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
4
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
1
f
r
 
1
5
0
p
x
"
 
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
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
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
m
o
d
e
 
=
=
=
 
"
f
i
b
o
n
a
c
c
i
"
 
?
 
3
8
0
 
:
 
3
2
0
}
 
/
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
h
a
n
o
i
"
 
&
&
 
f
r
a
m
e
?
.
p
e
g
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
m
t
-
3
 
p
t
-
3
 
b
o
r
d
e
r
-
t
 
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
H
a
n
o
i
P
e
g
s
 
p
e
g
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
e
g
s
}
 
n
M
a
x
=
{
p
a
r
s
e
d
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
m
o
v
e
s
 
&
&
 
f
r
a
m
e
.
m
o
v
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
 
0
 
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
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
M
o
v
e
s
:
 
{
f
r
a
m
e
.
m
o
v
e
s
.
s
l
i
c
e
(
-
6
)
.
j
o
i
n
(
"
 
 
·
 
 
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
m
o
v
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
 
6
 
&
&
 
`
 
 
·
 
(
+
$
{
f
r
a
m
e
.
m
o
v
e
s
.
l
e
n
g
t
h
 
-
 
6
}
 
e
a
r
l
i
e
r
)
`
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
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
c
k
C
o
l
u
m
n
 
i
t
e
m
s
=
{
(
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
)
.
m
a
p
(
(
s
)
 
=
>
 
(
{
 
v
a
l
u
e
:
 
S
t
r
i
n
g
(
s
.
v
a
l
u
e
)
 
}
)
)
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
 
m
a
x
H
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
W
h
a
t
 
i
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
 
f
u
n
c
t
i
o
n
 
t
h
a
t
 
c
a
l
l
s
 
i
t
s
e
l
f
 
t
o
 
s
o
l
v
e
 
a
 
s
m
a
l
l
e
r
 
v
e
r
s
i
o
n
 
o
f
 
t
h
e
 
s
a
m
e
 
p
r
o
b
l
e
m
.
 
E
v
e
r
y
 
r
e
c
u
r
s
i
v
e
 
f
u
n
c
t
i
o
n
 
m
u
s
t
 
h
a
v
e
 
(
1
)
 
a
 
b
a
s
e
 
c
a
s
e
 
t
h
a
t
 
s
t
o
p
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
 
a
n
d
 
(
2
)
 
a
 
r
e
c
u
r
s
i
v
e
 
c
a
s
e
 
t
h
a
t
 
s
h
r
i
n
k
s
 
t
o
w
a
r
d
 
t
h
e
 
b
a
s
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
h
e
 
c
a
l
l
 
s
t
a
c
k
"
,
 
b
o
d
y
:
 
"
E
v
e
r
y
 
f
u
n
c
t
i
o
n
 
c
a
l
l
 
p
u
s
h
e
s
 
a
 
n
e
w
 
'
f
r
a
m
e
'
 
o
n
t
o
 
t
h
e
 
c
a
l
l
 
s
t
a
c
k
 
-
 
s
t
o
r
i
n
g
 
i
t
s
 
a
r
g
u
m
e
n
t
s
,
 
l
o
c
a
l
 
v
a
r
i
a
b
l
e
s
,
 
a
n
d
 
r
e
t
u
r
n
 
a
d
d
r
e
s
s
.
 
W
h
e
n
 
t
h
e
 
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
t
u
r
n
s
,
 
t
h
e
 
f
r
a
m
e
 
i
s
 
p
o
p
p
e
d
.
 
A
 
r
e
c
u
r
s
i
v
e
 
f
u
n
c
t
i
o
n
 
t
h
a
t
 
f
o
r
g
e
t
s
 
i
t
s
 
b
a
s
e
 
c
a
s
e
 
w
i
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
 
t
h
i
s
 
s
t
a
c
k
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
i
n
e
a
r
 
v
s
 
t
r
e
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
"
,
 
b
o
d
y
:
 
"
F
a
c
t
o
r
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
s
 
o
n
c
e
 
p
e
r
 
c
a
l
l
 
(
l
i
n
e
a
r
 
-
 
d
e
p
t
h
 
n
,
 
c
a
l
l
s
 
n
)
.
 
F
i
b
o
n
a
c
c
i
 
r
e
c
u
r
s
e
s
 
t
w
i
c
e
 
p
e
r
 
c
a
l
l
 
(
t
r
e
e
 
-
 
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
 
c
a
l
l
s
,
 
l
o
t
s
 
o
f
 
r
e
p
e
a
t
e
d
 
w
o
r
k
)
.
 
T
h
i
s
 
i
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
y
 
F
i
b
o
n
a
c
c
i
 
n
e
e
d
s
 
m
e
m
o
i
z
a
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
T
o
w
e
r
 
o
f
 
H
a
n
o
i
"
,
 
b
o
d
y
:
 
"
T
o
 
m
o
v
e
 
n
 
d
i
s
k
s
 
f
r
o
m
 
A
 
t
o
 
C
:
 
(
1
)
 
m
o
v
e
 
n
-
1
 
d
i
s
k
s
 
A
→
B
 
u
s
i
n
g
 
C
 
a
s
 
s
p
a
r
e
,
 
(
2
)
 
m
o
v
e
 
d
i
s
k
 
n
 
f
r
o
m
 
A
→
C
,
 
(
3
)
 
m
o
v
e
 
n
-
1
 
d
i
s
k
s
 
B
→
C
 
u
s
i
n
g
 
A
 
a
s
 
s
p
a
r
e
.
 
T
h
e
 
r
e
c
u
r
r
e
n
c
e
 
T
(
n
)
 
=
 
2
T
(
n
-
1
)
 
+
 
1
 
g
i
v
e
s
 
2
ⁿ
 
-
 
1
 
m
o
v
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
T
r
u
s
t
 
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
 
C
o
m
b
i
n
e
,
 
d
o
n
&
r
s
q
u
o
;
t
 
s
i
m
u
l
a
t
e
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


 
 
 
 
 
 
 
 
 
 
R
u
s
s
i
a
n
 
d
o
l
l
s
:
 
e
a
c
h
 
d
o
l
l
 
o
p
e
n
s
 
t
o
 
r
e
v
e
a
l
 
a
 
s
m
a
l
l
e
r
 
v
e
r
s
i
o
n
 
o
f
 
i
t
s
e
l
f
,
 
a
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
 
o
n
e
 
i
s


 
 
 
 
 
 
 
 
 
 
s
o
l
i
d
.
 
R
e
c
u
r
s
i
o
n
 
w
o
r
k
s
 
t
h
e
 
s
a
m
e
 
w
a
y
:
 
a
 
f
u
n
c
t
i
o
n
 
t
h
a
t
 
s
o
l
v
e
s
 
a
 
p
r
o
b
l
e
m
 
b
y
 
c
a
l
l
i
n
g
 
i
t
s
e
l
f
 
o
n
 
a


 
 
 
 
 
 
 
 
 
 
s
m
a
l
l
e
r
 
v
e
r
s
i
o
n
,
 
u
n
t
i
l
 
i
t
 
h
i
t
s
 
a
 
b
a
s
e
 
c
a
s
e
 
t
h
a
t
 
n
e
e
d
s
 
n
o
 
f
u
r
t
h
e
r
 
w
o
r
k
.


 
 
 
 
 
 
 
 
 
 
A
s
s
u
m
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
v
e
 
c
a
l
l
 
w
o
r
k
s
 
c
o
r
r
e
c
t
l
y
 
f
o
r
 
a
 
s
m
a
l
l
e
r
 
i
n
p
u
t
,
 
t
h
e
n
 
f
o
c
u
s
 
o
n
l
y
 
o
n
 
h
o
w
 
t
o


 
 
 
 
 
 
 
 
 
 
c
o
m
b
i
n
e
 
i
t
s
 
r
e
s
u
l
t
 
w
i
t
h
 
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
 
s
t
e
p
.
 
T
h
a
t
 
s
i
n
g
l
e
 
h
a
b
i
t
 
u
n
l
o
c
k
s
 
e
v
e
r
y
 
r
e
c
u
r
s
i
v
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
f
a
c
t
(
4
)
 
=
 
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
4
 
·
 
3
 
·
 
2
 
·
 
1
"
 
}
,


 
 
 
 
{
 
q
:
 
"
f
i
b
(
6
)
 
=
 
?
"
,
 
a
:
 
"
8
"
,
 
h
i
n
t
:
 
"
0
,
1
,
1
,
2
,
3
,
5
,
8
"
 
}
,


 
 
 
 
{
 
q
:
 
"
N
u
m
b
e
r
 
o
f
 
m
o
v
e
s
 
f
o
r
 
h
a
n
o
i
(
n
=
4
)
?
"
,
 
a
:
 
"
1
5
"
,
 
h
i
n
t
:
 
"
2
⁴
 
-
 
1
"
 
}
,


 
 
 
 
{
 
q
:
 
"
N
u
m
b
e
r
 
o
f
 
f
i
b
(
n
)
 
c
a
l
l
s
 
f
o
r
 
n
=
5
 
(
n
a
i
v
e
)
?
"
,
 
a
:
 
"
1
5
"
,
 
h
i
n
t
:
 
"
f
i
b
(
5
)
=
f
i
b
(
4
)
+
f
i
b
(
3
)
;
 
e
x
p
a
n
d
 
f
u
l
l
y
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
 
o
n
 
p
a
p
e
r
.
 
W
r
i
t
e
 
y
o
u
r
 
g
u
e
s
s
,
 
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
c
o
d
e
 
c
l
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
 
t
e
x
t
-
s
m
 
b
g
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
8
0
0
 
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
c
o
d
e
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
R
e
c
u
r
s
i
o
n
 
=
 
s
t
a
c
k
,
 
i
m
p
l
i
c
i
t
l
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
 
r
e
c
u
r
s
i
v
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
 
c
a
n
 
b
e
 
r
e
w
r
i
t
t
e
n
 
i
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
 
u
s
i
n
g
 
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
 
s
t
a
c
k
.
 
D
F
S
 
i
n
 
g
r
a
p
h
s
,
 
t
r
e
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
s
,
 
p
a
r
s
e
r
s
 
-
 
a
l
l
 
u
s
e
 
t
h
i
s
 
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
.
 
U
n
d
e
r
s
t
a
n
d
i
n
g
 
t
h
e
 
c
a
l
l
 
s
t
a
c
k
 
m
a
k
e
s
 
t
h
e
 
t
r
a
n
s
l
a
t
i
o
n
 
m
e
c
h
a
n
i
c
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
W
h
y
 
n
a
i
v
e
 
F
i
b
o
n
a
c
c
i
 
i
s
 
O
(
2
ⁿ
)
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
a
c
h
 
c
a
l
l
 
s
p
a
w
n
s
 
t
w
o
 
c
h
i
l
d
r
e
n
,
 
a
n
d
 
i
d
e
n
t
i
c
a
l
 
s
u
b
p
r
o
b
l
e
m
s
 
a
r
e
 
s
o
l
v
e
d
 
r
e
p
e
a
t
e
d
l
y
.
 
f
i
b
(
3
0
)
 
c
o
m
p
u
t
e
s
 
f
i
b
(
1
0
)
 
o
v
e
r
 
1
0
,
0
0
0
 
t
i
m
e
s
.
 
M
e
m
o
i
z
a
t
i
o
n
 
c
o
l
l
a
p
s
e
s
 
t
h
i
s
 
t
o
 
O
(
n
)
 
-
 
t
h
e
 
b
r
i
d
g
e
 
t
o
 
d
y
n
a
m
i
c
 
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
 
c
h
e
a
t
 
s
h
e
e
t
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
F
a
c
t
o
r
i
a
l
:
 
T
(
n
)
 
=
 
T
(
n
-
1
)
 
+
 
O
(
1
)
 
→
 
O
(
n
)
 
t
i
m
e
,
 
O
(
n
)
 
s
t
a
c
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
B
i
n
a
r
y
 
r
e
c
u
r
s
i
o
n
:
 
T
(
n
)
 
=
 
2
T
(
n
-
1
)
 
+
 
O
(
1
)
 
→
 
O
(
2
ⁿ
)
 
t
i
m
e
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
H
a
n
o
i
:
 
2
ⁿ
 
-
 
1
 
m
o
v
e
s
.
 
T
h
e
 
m
i
n
i
m
u
m
 
i
s
 
t
i
g
h
t
 
-
 
n
o
 
a
l
g
o
r
i
t
h
m
 
d
o
e
s
 
f
e
w
e
r
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
T
a
i
l
 
r
e
c
u
r
s
i
o
n
 
=
 
r
e
c
u
r
s
i
v
e
 
c
a
l
l
 
i
s
 
t
h
e
 
l
a
s
t
 
o
p
;
 
c
o
m
p
i
l
e
r
s
 
c
a
n
 
o
p
t
i
m
i
z
e
 
i
t
 
t
o
 
a
 
l
o
o
p
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
M
e
m
o
i
z
a
t
i
o
n
 
i
n
 
o
n
e
 
l
i
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
T
h
e
 
b
r
i
d
g
e
 
f
r
o
m
 
n
a
i
v
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
 
t
o
 
t
o
p
-
d
o
w
n
 
D
P
 
i
n
 
P
y
t
h
o
n
:


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
p
r
e
 
c
l
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
1
0
0
 
p
x
-
4
 
p
y
-
3
 
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
m
o
n
o
 
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
8
0
0
"
>
{
`
f
r
o
m
 
f
u
n
c
t
o
o
l
s
 
i
m
p
o
r
t
 
l
r
u
_
c
a
c
h
e




@
l
r
u
_
c
a
c
h
e
(
m
a
x
s
i
z
e
=
N
o
n
e
)


d
e
f
 
f
i
b
(
n
:
 
i
n
t
)
 
-
>
 
i
n
t
:


 
 
 
 
r
e
t
u
r
n
 
n
 
i
f
 
n
 
<
 
2
 
e
l
s
e
 
f
i
b
(
n
 
-
 
1
)
 
+
 
f
i
b
(
n
 
-
 
2
)




f
i
b
(
5
0
)
 
 
#
 
1
2
_
5
8
6
_
2
6
9
_
0
2
5
 
-
 
i
n
s
t
a
n
t
`
}
<
/
p
r
e
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
R
e
c
u
r
s
i
o
n
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
E
v
e
r
y
 
r
e
c
u
r
s
i
v
e
 
f
u
n
c
t
i
o
n
 
m
u
s
t
 
h
a
v
e
 
w
h
i
c
h
 
t
w
o
 
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
o
o
p
 
a
n
d
 
a
 
c
o
u
n
t
e
r
"
,
 
"
A
 
b
a
s
e
 
c
a
s
e
 
a
n
d
 
a
 
r
e
c
u
r
s
i
v
e
 
c
a
s
e
"
,
 
"
A
 
s
t
a
c
k
 
a
n
d
 
a
 
q
u
e
u
e
"
,
 
"
A
 
m
u
t
e
x
 
a
n
d
 
a
 
s
e
m
a
p
h
o
r
e
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
A
 
b
a
s
e
 
c
a
s
e
 
s
t
o
p
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
;
 
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
v
e
 
c
a
s
e
 
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
 
p
r
o
b
l
e
m
 
t
o
w
a
r
d
 
t
h
e
 
b
a
s
e
.
 
M
i
s
s
i
n
g
 
t
h
e
 
b
a
s
e
 
c
a
s
e
 
c
a
u
s
e
s
 
a
 
s
t
a
c
k
 
o
v
e
r
f
l
o
w
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
H
o
w
 
m
a
n
y
 
f
u
n
c
t
i
o
n
 
c
a
l
l
s
 
d
o
e
s
 
n
a
i
v
e
 
f
i
b
(
6
)
 
m
a
k
e
 
i
n
 
t
o
t
a
l
 
(
i
n
c
l
u
d
i
n
g
 
t
h
e
 
r
o
o
t
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
7
"
,
 
"
1
3
"
,
 
"
2
5
"
,
 
"
6
3
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
C
o
u
n
t
(
n
)
 
=
 
C
o
u
n
t
(
n
-
1
)
 
+
 
C
o
u
n
t
(
n
-
2
)
 
+
 
1
 
w
i
t
h
 
C
o
u
n
t
(
0
)
=
C
o
u
n
t
(
1
)
=
1
.
 
T
h
a
t
 
g
i
v
e
s
 
1
,
1
,
3
,
5
,
9
,
1
5
,
2
5
 
→
 
f
i
b
(
6
)
 
=
 
2
5
 
c
a
l
l
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
F
o
r
 
T
o
w
e
r
 
o
f
 
H
a
n
o
i
 
w
i
t
h
 
n
 
=
 
5
 
d
i
s
k
s
,
 
h
o
w
 
m
a
n
y
 
m
o
v
e
s
 
a
r
e
 
n
e
e
d
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
1
0
"
,
 
"
2
5
"
,
 
"
3
1
"
,
 
"
3
2
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
2
ⁿ
 
-
 
1
 
=
 
2
⁵
 
-
 
1
 
=
 
3
1
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
 
i
t
e
r
a
t
i
v
e
 
c
o
d
e
 
s
o
m
e
t
i
m
e
s
 
p
r
e
f
e
r
r
e
d
 
o
v
e
r
 
r
e
c
u
r
s
i
o
n
 
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
 
a
l
g
o
r
i
t
h
m
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
R
e
c
u
r
s
i
o
n
 
g
i
v
e
s
 
w
r
o
n
g
 
a
n
s
w
e
r
s
"
,


 
 
 
 
 
 
 
 
"
R
e
c
u
r
s
i
o
n
 
u
s
e
s
 
O
(
d
e
p
t
h
)
 
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
 
s
p
a
c
e
 
a
n
d
 
r
i
s
k
s
 
s
t
a
c
k
 
o
v
e
r
f
l
o
w
"
,


 
 
 
 
 
 
 
 
"
R
e
c
u
r
s
i
o
n
 
c
a
n
'
t
 
e
x
p
r
e
s
s
 
d
i
v
i
d
e
-
a
n
d
-
c
o
n
q
u
e
r
"
,


 
 
 
 
 
 
 
 
"
R
e
c
u
r
s
i
o
n
 
a
l
w
a
y
s
 
r
u
n
s
 
s
l
o
w
e
r
 
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
a
l
l
y
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
R
e
c
u
r
s
i
o
n
 
p
a
y
s
 
O
(
d
e
p
t
h
)
 
s
p
a
c
e
 
f
o
r
 
t
h
e
 
s
t
a
c
k
.
 
F
o
r
 
d
e
e
p
 
r
e
c
u
r
s
i
o
n
 
o
n
 
l
a
r
g
e
 
i
n
p
u
t
s
 
t
h
i
s
 
c
a
n
 
o
v
e
r
f
l
o
w
 
-
 
i
t
e
r
a
t
i
v
e
 
c
o
d
e
 
u
s
e
s
 
O
(
1
)
 
o
r
 
a
 
m
a
n
a
g
e
d
 
s
t
a
c
k
 
i
n
s
t
e
a
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
R
e
c
u
r
s
i
o
n
 
-
 
T
h
i
n
k
i
n
g
 
R
e
c
u
r
s
i
v
e
l
y
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
F
o
u
n
d
a
t
i
o
n
 
f
o
r
 
e
v
e
r
y
 
d
i
v
i
d
e
-
a
n
d
-
c
o
n
q
u
e
r
 
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
i
n
g
 
/
 
D
P
 
q
u
e
s
t
i
o
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
D
i
v
i
d
e
 
&
 
C
o
n
q
u
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


