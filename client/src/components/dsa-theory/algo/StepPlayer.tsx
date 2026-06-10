
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
 
C
h
e
v
r
o
n
L
e
f
t
,
 
C
h
e
v
r
o
n
R
i
g
h
t
,
 
P
a
u
s
e
,
 
P
l
a
y
,
 
R
o
t
a
t
e
C
c
w
 
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




 


e
x
p
o
r
t
 
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
e
p
P
l
a
y
e
r
<
T
>
 
{


 
 
c
u
r
r
e
n
t
:
 
T
 
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


 
 
i
n
d
e
x
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
:
 
n
u
m
b
e
r
;


 
 
i
s
P
l
a
y
i
n
g
:
 
b
o
o
l
e
a
n
;


 
 
p
l
a
y
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


 
 
p
a
u
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
o
g
g
l
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


 
 
s
t
e
p
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


 
 
b
a
c
k
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


 
 
r
e
s
e
t
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


 
 
s
e
t
I
n
d
e
x
:
 
(
i
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
 
r
e
a
c
t
-
r
e
f
r
e
s
h
/
o
n
l
y
-
e
x
p
o
r
t
-
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
<
T
>
(
f
r
a
m
e
s
:
 
T
[
]
,
 
s
p
e
e
d
M
s
 
=
 
7
0
0
)
:
 
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
<
T
>
 
{


 
 
c
o
n
s
t
 
[
i
n
d
e
x
,
 
s
e
t
I
n
d
e
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
0
)
;


 
 
c
o
n
s
t
 
[
i
s
P
l
a
y
i
n
g
,
 
s
e
t
I
s
P
l
a
y
i
n
g
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
f
a
l
s
e
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
(
f
r
a
m
e
s
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
 
f
r
a
m
e
s
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
 
f
r
a
m
e
s
;
 
}
)
;




 
 
/
/
 
R
e
s
e
t
 
w
h
e
n
 
f
r
a
m
e
s
 
c
h
a
n
g
e


 
 
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
 
r
e
a
c
t
-
h
o
o
k
s
/
s
e
t
-
s
t
a
t
e
-
i
n
-
e
f
f
e
c
t


 
 
 
 
s
e
t
I
n
d
e
x
(
0
)
;


 
 
 
 
 


 
 
 
 
s
e
t
I
s
P
l
a
y
i
n
g
(
f
a
l
s
e
)
;


 
 
}
,
 
[
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
]
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
!
i
s
P
l
a
y
i
n
g
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
 
t
 
=
 
s
e
t
I
n
t
e
r
v
a
l
(
(
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
I
n
d
e
x
(
(
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
 
m
a
x
 
=
 
f
r
a
m
e
s
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
f
 
(
i
 
>
=
 
m
a
x
)
 
{


 
 
 
 
 
 
 
 
 
 
s
e
t
I
s
P
l
a
y
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
i
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
i
 
+
 
1
;


 
 
 
 
 
 
}
)
;


 
 
 
 
}
,
 
s
p
e
e
d
M
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
)
 
=
>
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
t
)
;


 
 
}
,
 
[
i
s
P
l
a
y
i
n
g
,
 
s
p
e
e
d
M
s
]
)
;




 
 
r
e
t
u
r
n
 
{


 
 
 
 
c
u
r
r
e
n
t
:
 
f
r
a
m
e
s
[
i
n
d
e
x
]
,


 
 
 
 
i
n
d
e
x
,


 
 
 
 
t
o
t
a
l
,


 
 
 
 
i
s
P
l
a
y
i
n
g
,


 
 
 
 
p
l
a
y
:
 
(
)
 
=
>
 
s
e
t
I
s
P
l
a
y
i
n
g
(
t
r
u
e
)
,


 
 
 
 
p
a
u
s
e
:
 
(
)
 
=
>
 
s
e
t
I
s
P
l
a
y
i
n
g
(
f
a
l
s
e
)
,


 
 
 
 
t
o
g
g
l
e
:
 
(
)
 
=
>
 
s
e
t
I
s
P
l
a
y
i
n
g
(
(
p
)
 
=
>
 
!
p
)
,


 
 
 
 
s
t
e
p
:
 
(
)
 
=
>
 
s
e
t
I
n
d
e
x
(
(
i
)
 
=
>
 
M
a
t
h
.
m
i
n
(
t
o
t
a
l
 
-
 
1
,
 
i
 
+
 
1
)
)
,


 
 
 
 
b
a
c
k
:
 
(
)
 
=
>
 
s
e
t
I
n
d
e
x
(
(
i
)
 
=
>
 
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
 
i
 
-
 
1
)
)
,


 
 
 
 
r
e
s
e
t
:
 
(
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
I
n
d
e
x
(
0
)
;


 
 
 
 
 
 
s
e
t
I
s
P
l
a
y
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
}
,


 
 
 
 
s
e
t
I
n
d
e
x
:
 
(
i
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
 
s
e
t
I
n
d
e
x
(
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
t
o
t
a
l
 
-
 
1
,
 
i
)
)
)
,


 
 
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
 
P
l
a
y
e
r
C
o
n
t
r
o
l
s
P
r
o
p
s
<
T
>
 
{


 
 
p
l
a
y
e
r
:
 
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
<
T
>
;


}




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
 
P
l
a
y
e
r
C
o
n
t
r
o
l
s
<
T
>
(
{
 
p
l
a
y
e
r
 
}
:
 
P
l
a
y
e
r
C
o
n
t
r
o
l
s
P
r
o
p
s
<
T
>
)
 
{


 
 
c
o
n
s
t
 
{
 
i
n
d
e
x
,
 
t
o
t
a
l
,
 
i
s
P
l
a
y
i
n
g
,
 
t
o
g
g
l
e
,
 
s
t
e
p
,
 
b
a
c
k
,
 
r
e
s
e
t
,
 
s
e
t
I
n
d
e
x
 
}
 
=
 
p
l
a
y
e
r
;


 
 
c
o
n
s
t
 
a
t
E
n
d
 
=
 
i
n
d
e
x
 
>
=
 
t
o
t
a
l
 
-
 
1
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
0
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
>


 
 
 
 
 
 
 
 
<
I
c
o
n
B
t
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
r
e
s
e
t
}
 
t
i
t
l
e
=
"
R
e
s
e
t
 
t
o
 
s
t
a
r
t
"
>


 
 
 
 
 
 
 
 
 
 
<
R
o
t
a
t
e
C
c
w
 
c
l
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


 
 
 
 
 
 
 
 
<
/
I
c
o
n
B
t
n
>


 
 
 
 
 
 
 
 
<
I
c
o
n
B
t
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
b
a
c
k
}
 
t
i
t
l
e
=
"
P
r
e
v
i
o
u
s
 
s
t
e
p
"
 
d
i
s
a
b
l
e
d
=
{
i
n
d
e
x
 
=
=
=
 
0
}
>


 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
L
e
f
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


 
 
 
 
 
 
 
 
<
/
I
c
o
n
B
t
n
>


 
 
 
 
 
 
 
 
<
I
c
o
n
B
t
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
t
o
g
g
l
e
}
 
t
i
t
l
e
=
{
i
s
P
l
a
y
i
n
g
 
?
 
"
P
a
u
s
e
"
 
:
 
"
P
l
a
y
"
}
 
a
c
c
e
n
t
>


 
 
 
 
 
 
 
 
 
 
{
i
s
P
l
a
y
i
n
g
 
?
 
<
P
a
u
s
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
}


 
 
 
 
 
 
 
 
<
/
I
c
o
n
B
t
n
>


 
 
 
 
 
 
 
 
<
I
c
o
n
B
t
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
s
t
e
p
}
 
t
i
t
l
e
=
"
N
e
x
t
 
s
t
e
p
"
 
d
i
s
a
b
l
e
d
=
{
a
t
E
n
d
}
>


 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
R
i
g
h
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


 
 
 
 
 
 
 
 
<
/
I
c
o
n
B
t
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
r
a
n
g
e
"


 
 
 
 
 
 
 
 
 
 
m
i
n
=
{
0
}


 
 
 
 
 
 
 
 
 
 
m
a
x
=
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
 
t
o
t
a
l
 
-
 
1
)
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
d
e
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
I
n
d
e
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
3
2
 
a
c
c
e
n
t
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


 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
"
S
t
e
p
 
p
o
s
i
t
i
o
n
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
 
t
a
b
u
l
a
r
-
n
u
m
s
 
w
h
i
t
e
s
p
a
c
e
-
n
o
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
{
S
t
r
i
n
g
(
i
n
d
e
x
 
+
 
1
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
)
}
 
/
 
{
S
t
r
i
n
g
(
t
o
t
a
l
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
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




i
n
t
e
r
f
a
c
e
 
I
c
o
n
B
t
n
P
r
o
p
s
 
{


 
 
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
a
c
t
.
R
e
a
c
t
N
o
d
e
;


 
 
o
n
C
l
i
c
k
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
;


 
 
d
i
s
a
b
l
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


 
 
a
c
c
e
n
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


}




f
u
n
c
t
i
o
n
 
I
c
o
n
B
t
n
(
{
 
c
h
i
l
d
r
e
n
,
 
o
n
C
l
i
c
k
,
 
t
i
t
l
e
,
 
d
i
s
a
b
l
e
d
,
 
a
c
c
e
n
t
 
}
:
 
I
c
o
n
B
t
n
P
r
o
p
s
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
o
n
C
l
i
c
k
}


 
 
 
 
 
 
t
i
t
l
e
=
{
t
i
t
l
e
}


 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
{
t
i
t
l
e
}


 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
d
i
s
a
b
l
e
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
.
5
 
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
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
3
0
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
 
$
{


 
 
 
 
 
 
 
 
a
c
c
e
n
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
4
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
l
i
m
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
s
t
o
n
e
-
9
0
0
"


 
 
 
 
 
 
 
 
 
 
:
 
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
c
h
i
l
d
r
e
n
}


 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
)
;


}


