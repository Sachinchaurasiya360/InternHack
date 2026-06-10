
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
E
f
f
e
c
t
,
 
u
s
e
R
e
f
,
 
u
s
e
C
a
l
l
b
a
c
k
 
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
 
m
o
t
i
o
n
,
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
"
;


i
m
p
o
r
t
 
{
 
X
,
 
L
i
n
k
e
d
i
n
,
 
T
w
i
t
t
e
r
,
 
M
e
s
s
a
g
e
C
i
r
c
l
e
,
 
D
o
w
n
l
o
a
d
,
 
A
w
a
r
d
 
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
 
g
s
a
p
 
f
r
o
m
 
"
g
s
a
p
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
 
r
a
n
d
o
m
B
e
t
w
e
e
n
(
m
i
n
:
 
n
u
m
b
e
r
,
 
m
a
x
:
 
n
u
m
b
e
r
)
 
{


 
 
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
m
a
x
 
-
 
m
i
n
)
 
+
 
m
i
n
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
 
C
o
n
f
e
t
t
i
P
a
r
t
i
c
l
e
 
{


 
 
e
l
e
m
e
n
t
:
 
H
T
M
L
D
i
v
E
l
e
m
e
n
t
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
r
e
a
t
e
C
o
n
f
e
t
t
i
(
c
o
n
t
a
i
n
e
r
:
 
H
T
M
L
D
i
v
E
l
e
m
e
n
t
)
 
{


 
 
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
a
3
e
6
3
5
"
,
 
"
#
f
a
c
c
1
5
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
a
7
8
b
f
a
"
,
 
"
#
2
2
d
3
e
e
"
,
 
"
#
f
4
7
2
b
6
"
]
;


 
 
c
o
n
s
t
 
p
a
r
t
i
c
l
e
s
:
 
C
o
n
f
e
t
t
i
P
a
r
t
i
c
l
e
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
 
8
0
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
 
e
l
 
=
 
d
o
c
u
m
e
n
t
.
c
r
e
a
t
e
E
l
e
m
e
n
t
(
"
d
i
v
"
)
;


 
 
 
 
e
l
.
s
t
y
l
e
.
c
s
s
T
e
x
t
 
=
 
`


 
 
 
 
 
 
p
o
s
i
t
i
o
n
:
 
a
b
s
o
l
u
t
e
;


 
 
 
 
 
 
w
i
d
t
h
:
 
$
{
r
a
n
d
o
m
B
e
t
w
e
e
n
(
6
,
 
1
2
)
}
p
x
;


 
 
 
 
 
 
h
e
i
g
h
t
:
 
$
{
r
a
n
d
o
m
B
e
t
w
e
e
n
(
6
,
 
1
2
)
}
p
x
;


 
 
 
 
 
 
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
 
$
{
c
o
l
o
r
s
[
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
)
]
}
;


 
 
 
 
 
 
b
o
r
d
e
r
-
r
a
d
i
u
s
:
 
$
{
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
 
>
 
0
.
5
 
?
 
"
5
0
%
"
 
:
 
"
2
p
x
"
}
;


 
 
 
 
 
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
:
 
n
o
n
e
;


 
 
 
 
`
;


 
 
 
 
c
o
n
t
a
i
n
e
r
.
a
p
p
e
n
d
C
h
i
l
d
(
e
l
)
;


 
 
 
 
p
a
r
t
i
c
l
e
s
.
p
u
s
h
(
{
 
e
l
e
m
e
n
t
:
 
e
l
,
 
x
:
 
r
a
n
d
o
m
B
e
t
w
e
e
n
(
0
,
 
c
o
n
t
a
i
n
e
r
.
o
f
f
s
e
t
W
i
d
t
h
)
,
 
y
:
 
-
2
0
 
}
)
;


 
 
}




 
 
p
a
r
t
i
c
l
e
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
p
)
 
=
>
 
{


 
 
 
 
g
s
a
p
.
s
e
t
(
p
.
e
l
e
m
e
n
t
,
 
{
 
x
:
 
p
.
x
,
 
y
:
 
p
.
y
,
 
o
p
a
c
i
t
y
:
 
1
,
 
s
c
a
l
e
:
 
r
a
n
d
o
m
B
e
t
w
e
e
n
(
0
.
5
,
 
1
.
5
)
 
}
)
;


 
 
 
 
g
s
a
p
.
t
o
(
p
.
e
l
e
m
e
n
t
,
 
{


 
 
 
 
 
 
y
:
 
c
o
n
t
a
i
n
e
r
.
o
f
f
s
e
t
H
e
i
g
h
t
 
+
 
2
0
,


 
 
 
 
 
 
x
:
 
p
.
x
 
+
 
r
a
n
d
o
m
B
e
t
w
e
e
n
(
-
1
5
0
,
 
1
5
0
)
,


 
 
 
 
 
 
r
o
t
a
t
i
o
n
:
 
r
a
n
d
o
m
B
e
t
w
e
e
n
(
-
7
2
0
,
 
7
2
0
)
,


 
 
 
 
 
 
o
p
a
c
i
t
y
:
 
0
,


 
 
 
 
 
 
d
u
r
a
t
i
o
n
:
 
r
a
n
d
o
m
B
e
t
w
e
e
n
(
2
,
 
4
)
,


 
 
 
 
 
 
e
a
s
e
:
 
"
p
o
w
e
r
2
.
o
u
t
"
,


 
 
 
 
 
 
d
e
l
a
y
:
 
r
a
n
d
o
m
B
e
t
w
e
e
n
(
0
,
 
1
)
,


 
 
 
 
}
)
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
 
(
)
 
=
>
 
{


 
 
 
 
p
a
r
t
i
c
l
e
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
p
)
 
=
>
 
p
.
e
l
e
m
e
n
t
.
r
e
m
o
v
e
(
)
)
;


 
 
}
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
 
C
o
m
p
l
e
t
i
o
n
C
e
l
e
b
r
a
t
i
o
n
P
r
o
p
s
 
{


 
 
o
p
e
n
:
 
b
o
o
l
e
a
n
;


 
 
o
n
C
l
o
s
e
:
 
(
)
 
=
>
 
v
o
i
d
;


 
 
t
r
a
c
k
N
a
m
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
e
s
s
o
n
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


 
 
e
s
t
i
m
a
t
e
d
H
o
u
r
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
a
d
g
e
L
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


 
 
u
s
e
r
N
a
m
e
:
 
s
t
r
i
n
g
;


}




c
o
n
s
t
 
S
H
A
R
E
_
T
E
X
T
 
=
 
(
t
r
a
c
k
N
a
m
e
:
 
s
t
r
i
n
g
,
 
b
a
d
g
e
L
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
)
 
=
>


 
 
`
I
 
j
u
s
t
 
c
o
m
p
l
e
t
e
d
 
t
h
e
 
$
{
t
r
a
c
k
N
a
m
e
}
 
t
r
a
c
k
 
o
n
 
I
n
t
e
r
n
H
a
c
k
 
a
n
d
 
e
a
r
n
e
d
 
t
h
e
 
$
{
b
a
d
g
e
L
a
b
e
l
}
 
b
a
d
g
e
!
 
🎉
 
C
h
e
c
k
 
i
t
 
o
u
t
:
 
h
t
t
p
s
:
/
/
i
n
t
e
r
n
h
a
c
k
.
i
n
`
;




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
C
o
m
p
l
e
t
i
o
n
C
e
l
e
b
r
a
t
i
o
n
(
{


 
 
o
p
e
n
,


 
 
o
n
C
l
o
s
e
,


 
 
t
r
a
c
k
N
a
m
e
,


 
 
l
e
s
s
o
n
C
o
u
n
t
,


 
 
e
s
t
i
m
a
t
e
d
H
o
u
r
s
,


 
 
b
a
d
g
e
L
a
b
e
l
,


 
 
u
s
e
r
N
a
m
e
,


}
:
 
C
o
m
p
l
e
t
i
o
n
C
e
l
e
b
r
a
t
i
o
n
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
 
c
o
n
f
e
t
t
i
R
e
f
 
=
 
u
s
e
R
e
f
<
H
T
M
L
D
i
v
E
l
e
m
e
n
t
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
c
l
e
a
n
u
p
R
e
f
 
=
 
u
s
e
R
e
f
<
(
(
)
 
=
>
 
v
o
i
d
)
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;




 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
o
p
e
n
 
&
&
 
c
o
n
f
e
t
t
i
R
e
f
.
c
u
r
r
e
n
t
)
 
{


 
 
 
 
 
 
c
l
e
a
n
u
p
R
e
f
.
c
u
r
r
e
n
t
 
=
 
c
r
e
a
t
e
C
o
n
f
e
t
t
i
(
c
o
n
f
e
t
t
i
R
e
f
.
c
u
r
r
e
n
t
)
;


 
 
 
 
}


 
 
 
 
i
f
 
(
!
o
p
e
n
 
&
&
 
c
l
e
a
n
u
p
R
e
f
.
c
u
r
r
e
n
t
)
 
{


 
 
 
 
 
 
c
l
e
a
n
u
p
R
e
f
.
c
u
r
r
e
n
t
(
)
;


 
 
 
 
 
 
c
l
e
a
n
u
p
R
e
f
.
c
u
r
r
e
n
t
 
=
 
n
u
l
l
;


 
 
 
 
}


 
 
}
,
 
[
o
p
e
n
]
)
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
S
h
a
r
e
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
p
l
a
t
f
o
r
m
:
 
"
l
i
n
k
e
d
i
n
"
 
|
 
"
t
w
i
t
t
e
r
"
 
|
 
"
w
h
a
t
s
a
p
p
"
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
e
x
t
 
=
 
e
n
c
o
d
e
U
R
I
C
o
m
p
o
n
e
n
t
(
S
H
A
R
E
_
T
E
X
T
(
t
r
a
c
k
N
a
m
e
,
 
b
a
d
g
e
L
a
b
e
l
)
)
;


 
 
 
 
c
o
n
s
t
 
u
r
l
 
=
 
e
n
c
o
d
e
U
R
I
C
o
m
p
o
n
e
n
t
(
"
h
t
t
p
s
:
/
/
i
n
t
e
r
n
h
a
c
k
.
i
n
"
)
;


 
 
 
 
c
o
n
s
t
 
u
r
l
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
>
 
=
 
{


 
 
 
 
 
 
l
i
n
k
e
d
i
n
:
 
`
h
t
t
p
s
:
/
/
l
i
n
k
e
d
i
n
.
c
o
m
/
s
h
a
r
i
n
g
/
s
h
a
r
e
-
o
f
f
s
i
t
e
/
?
u
r
l
=
$
{
u
r
l
}
&
t
e
x
t
=
$
{
t
e
x
t
}
`
,


 
 
 
 
 
 
t
w
i
t
t
e
r
:
 
`
h
t
t
p
s
:
/
/
t
w
i
t
t
e
r
.
c
o
m
/
i
n
t
e
n
t
/
t
w
e
e
t
?
t
e
x
t
=
$
{
t
e
x
t
}
&
u
r
l
=
$
{
u
r
l
}
`
,


 
 
 
 
 
 
w
h
a
t
s
a
p
p
:
 
`
h
t
t
p
s
:
/
/
w
a
.
m
e
/
?
t
e
x
t
=
$
{
t
e
x
t
}
%
2
0
$
{
u
r
l
}
`
,


 
 
 
 
}
;


 
 
 
 
w
i
n
d
o
w
.
o
p
e
n
(
u
r
l
s
[
p
l
a
t
f
o
r
m
]
,
 
"
_
b
l
a
n
k
"
,
 
"
n
o
o
p
e
n
e
r
,
n
o
r
e
f
e
r
r
e
r
"
)
;


 
 
}
,
 
[
t
r
a
c
k
N
a
m
e
,
 
b
a
d
g
e
L
a
b
e
l
]
)
;




 
 
c
o
n
s
t
 
c
o
m
p
l
e
t
e
d
D
a
t
e
 
=
 
n
e
w
 
D
a
t
e
(
)
.
t
o
L
o
c
a
l
e
D
a
t
e
S
t
r
i
n
g
(
"
e
n
-
I
N
"
,
 
{


 
 
 
 
y
e
a
r
:
 
"
n
u
m
e
r
i
c
"
,
 
m
o
n
t
h
:
 
"
l
o
n
g
"
,
 
d
a
y
:
 
"
n
u
m
e
r
i
c
"
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
 
(


 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
{
o
p
e
n
 
&
&
 
(


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
 
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
f
i
x
e
d
 
i
n
s
e
t
-
0
 
z
-
5
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
 
b
g
-
b
l
a
c
k
/
5
0
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
s
m
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
o
n
C
l
o
s
e
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
s
c
a
l
e
:
 
0
.
9
,
 
y
:
 
3
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
s
c
a
l
e
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
s
c
a
l
e
:
 
0
.
9
,
 
y
:
 
3
0
 
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
r
e
l
a
t
i
v
e
 
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
 
r
o
u
n
d
e
d
-
2
x
l
 
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
 
s
h
a
d
o
w
-
2
x
l
 
w
-
f
u
l
l
 
m
a
x
-
w
-
m
d
 
m
x
-
4
 
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
e
)
 
=
>
 
e
.
s
t
o
p
P
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
)
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
r
e
f
=
{
c
o
n
f
e
t
t
i
R
e
f
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
 
i
n
s
e
t
-
0
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
 
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
 
p
-
6
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
o
n
C
l
o
s
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
 
t
o
p
-
4
 
r
i
g
h
t
-
4
 
p
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
s
t
o
n
e
-
4
0
0
 
h
o
v
e
r
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
6
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
 
h
o
v
e
r
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
1
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
 
b
o
r
d
e
r
-
0
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
X
 
c
l
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
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
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
w
a
r
d
 
c
l
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
 
h
-
1
6
 
m
x
-
a
u
t
o
 
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
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
t
e
x
t
-
x
l
 
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
w
h
i
t
e
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
o
n
g
r
a
t
u
l
a
t
i
o
n
s
,
 
{
u
s
e
r
N
a
m
e
}
!


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
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
5
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
 
m
b
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Y
o
u
 
c
o
m
p
l
e
t
e
d
 
t
h
e
 
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
2
0
0
"
>
{
t
r
a
c
k
N
a
m
e
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
 
t
r
a
c
k
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
2
 
g
a
p
-
3
 
m
b
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
8
0
0
 
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
3
"
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
"
>
L
e
s
s
o
n
s
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
l
g
 
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
w
h
i
t
e
"
>
{
l
e
s
s
o
n
C
o
u
n
t
}
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
8
0
0
 
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
3
"
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
"
>
H
o
u
r
s
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
l
g
 
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
w
h
i
t
e
"
>
{
e
s
t
i
m
a
t
e
d
H
o
u
r
s
}
h
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
a
m
b
e
r
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
a
m
b
e
r
-
9
0
0
/
2
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
a
m
b
e
r
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
a
m
b
e
r
-
8
0
0
 
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
3
 
m
b
-
5
"
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
r
"
>
B
a
d
g
e
 
E
a
r
n
e
d
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
a
m
b
e
r
-
3
0
0
"
>
{
b
a
d
g
e
L
a
b
e
l
}
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
4
0
0
 
m
b
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
o
m
p
l
e
t
e
d
 
o
n
 
{
c
o
m
p
l
e
t
e
d
D
a
t
e
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
 
g
a
p
-
2
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
h
a
n
d
l
e
S
h
a
r
e
(
"
l
i
n
k
e
d
i
n
"
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
 
p
x
-
3
 
p
y
-
2
 
b
g
-
b
l
u
e
-
6
0
0
 
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
 
h
o
v
e
r
:
b
g
-
b
l
u
e
-
7
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
 
b
o
r
d
e
r
-
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
e
d
i
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
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
L
i
n
k
e
d
I
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
h
a
n
d
l
e
S
h
a
r
e
(
"
t
w
i
t
t
e
r
"
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
 
p
x
-
3
 
p
y
-
2
 
b
g
-
n
e
u
t
r
a
l
-
8
0
0
 
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
 
h
o
v
e
r
:
b
g
-
n
e
u
t
r
a
l
-
9
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
 
b
o
r
d
e
r
-
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
w
i
t
t
e
r
 
c
l
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
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
X


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
h
a
n
d
l
e
S
h
a
r
e
(
"
w
h
a
t
s
a
p
p
"
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
 
p
x
-
3
 
p
y
-
2
 
b
g
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
 
h
o
v
e
r
:
b
g
-
e
m
e
r
a
l
d
-
7
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
 
b
o
r
d
e
r
-
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
s
s
a
g
e
C
i
r
c
l
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
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
W
h
a
t
s
A
p
p


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
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
b
u
t
t
o
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
2
 
p
x
-
5
 
p
y
-
2
.
5
 
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
 
d
a
r
k
:
b
g
-
w
h
i
t
e
 
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
9
0
0
 
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
e
m
i
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
-
l
g
 
h
o
v
e
r
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
 
b
o
r
d
e
r
-
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
D
o
w
n
l
o
a
d
 
c
l
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
D
o
w
n
l
o
a
d
 
C
e
r
t
i
f
i
c
a
t
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
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
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
)
}


 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
)
;


}


